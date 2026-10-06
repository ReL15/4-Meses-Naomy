/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { CertaintyVault } from './components/CertaintyVault';
import { LoveQuiz } from './components/LoveQuiz';
import { PromiseWall } from './components/PromiseWall';
import { LetterModal } from './components/LetterModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080911] text-[#f1f3f9] flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenLetter={() => setIsLetterOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Clocks, Distance and Romantic Artwork */}
        <HeroSection onOpenLetter={() => setIsLetterOpen(true)} />

        {/* Las 4 Lunas: The 4 Months Interactive Chronicle */}
        <JourneyTimeline />

        {/* El Frasco de Certezas: Dismantling doubts of not being enough */}
        <CertaintyVault />

        {/* Dynamic Couple Game: The El Salvador & Peru Love Quiz */}
        <LoveQuiz />

        {/* Interactive Bucket List / Promises for the First Reunion */}
        <PromiseWall />
      </main>

      {/* Keepsake Letter Modal */}
      <LetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
      />

      {/* Footer */}
      <Footer onOpenLetter={() => setIsLetterOpen(true)} />
    </div>
  );
}
