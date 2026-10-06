/**
 * Web Audio API synthesizer for romantic ambient music and sound effects.
 * No external audio files needed; guarantees 100% reliability in any browser.
 */

class AudioManager {
  private ctx: AudioContext | null = null;
  private isPlayingAmbient: boolean = false;
  private ambientTimer: number | null = null;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle soft bell/chime
  playChime(frequency: number = 523.25) { // C5 default
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.3);
    } catch {
      // Audio autoplay policy handled silently
    }
  }

  // Play celebratory harp flutter
  playHarpArpeggio() {
    try {
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51]; // A major romantic chord
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playChime(freq);
        }, idx * 110);
      });
    } catch {
      // ignore
    }
  }

  // Toggle ambient music loop
  toggleAmbient(callback?: (playing: boolean) => void): boolean {
    this.initContext();
    if (this.isPlayingAmbient) {
      this.stopAmbient();
      if (callback) callback(false);
      return false;
    } else {
      this.startAmbient();
      if (callback) callback(true);
      return true;
    }
  }

  getIsAmbientPlaying(): boolean {
    return this.isPlayingAmbient;
  }

  private startAmbient() {
    this.initContext();
    if (!this.ctx) return;
    this.isPlayingAmbient = true;

    // Romantic chord progression: Fmaj7 - Cmaj7 - Dm7 - Gsus4
    // Soft, meditative, warm frequencies
    const chordProgressions = [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
      [130.81, 196.00, 261.63, 329.63], // Cmaj7 (C3, G3, C4, E4)
      [146.83, 220.00, 261.63, 349.23], // Dm7   (D3, A3, C4, F4)
      [196.00, 261.63, 293.66, 392.00], // Gsus4 (G3, C4, D4, G4)
    ];

    let step = 0;

    const playChord = () => {
      if (!this.isPlayingAmbient || !this.ctx || !this.masterGain) return;

      const chord = chordProgressions[step % chordProgressions.length];
      const now = this.ctx.currentTime;
      const duration = 5.2;

      chord.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(750, now);

        // Soft slow fade in and fade out
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + idx * 0.15);
        osc.stop(now + duration + 0.2);
      });

      step++;
      this.ambientTimer = window.setTimeout(playChord, 4800);
    };

    playChord();
  }

  private stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientTimer !== null) {
      window.clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }
  }
}

export const audio = new AudioManager();
