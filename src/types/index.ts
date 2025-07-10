// This file will contain all our TypeScript type definitions
// Think of types as blueprints that describe the shape of our data

// User-related types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string; // ? means optional
  createdAt: Date;
}

// Quiz-related types
export interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard'; // Union type - only these values allowed
  questions: Question[];
  createdBy: string; // User ID
  createdAt: Date;
  isPublic: boolean;
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: Option[]; // Only for multiple choice
  correctAnswer: string;
  explanation?: string;
  points: number;
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

// Quiz attempt types
export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  answers: Answer[];
  score: number;
  totalPoints: number;
  startedAt: Date;
  completedAt?: Date;
}

export interface Answer {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
}

// Component prop types
export interface QuizCardProps {
  quiz: Quiz;
  onStart: (quizId: string) => void;
}

export interface QuestionComponentProps {
  question: Question;
  selectedAnswer?: string;
  onAnswer: (answer: string) => void;
  disabled?: boolean;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// Form types for user input
export interface CreateQuizForm {
  title: string;
  description: string;
  difficulty: Quiz['difficulty'];
  isPublic: boolean;
}

export interface CreateQuestionForm {
  text: string;
  type: Question['type'];
  options: Omit<Option, 'id'>[]; // All Option properties except 'id'
  correctAnswer: string;
  explanation?: string;
  points: number;
}
