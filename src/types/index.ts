export interface Milestone {
  month: number;
  title: string;
  subtitle: string;
  date: string;
  theme: string;
  summary: string;
  letter: string;
  quote: string;
  symbol: string;
}

export interface CertaintyCard {
  id: string;
  category: 'insecurity' | 'love' | 'future' | 'distance';
  prompt: string;
  title: string;
  message: string;
  promise: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
    reaction: string;
  }[];
  explanation: string;
  countryNote?: string;
}

export interface ReunionWish {
  id: string;
  text: string;
  country: 'sv' | 'pe' | 'both';
  completed: boolean;
}
