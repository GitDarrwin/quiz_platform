// Mock data for development - later we'll replace this with real API calls
import { Quiz, Question } from '@/types';

// Sample questions for JavaScript quiz
const jsQuestions: Question[] = [
  {
    id: '1',
    text: 'What is the output of console.log(typeof null)?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'null', isCorrect: false },
      { id: 'b', text: 'object', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'string', isCorrect: false }
    ],
    correctAnswer: 'object',
    explanation: 'This is a well-known quirk in JavaScript. typeof null returns "object" due to a bug in the original JavaScript implementation.',
    points: 10
  },
  {
    id: '2',
    text: 'What does the spread operator (...) do?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'Creates a copy of an array or object', isCorrect: true },
      { id: 'b', text: 'Deletes elements from an array', isCorrect: false },
      { id: 'c', text: 'Sorts array elements', isCorrect: false },
      { id: 'd', text: 'Converts string to array', isCorrect: false }
    ],
    correctAnswer: 'Creates a copy of an array or object',
    explanation: 'The spread operator allows you to expand arrays, objects, or strings into individual elements.',
    points: 10
  }
];

// Sample questions for React quiz
const reactQuestions: Question[] = [
  {
    id: '3',
    text: 'What is JSX?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'A JavaScript library', isCorrect: false },
      { id: 'b', text: 'A syntax extension for JavaScript', isCorrect: true },
      { id: 'c', text: 'A CSS framework', isCorrect: false },
      { id: 'd', text: 'A database', isCorrect: false }
    ],
    correctAnswer: 'A syntax extension for JavaScript',
    explanation: 'JSX stands for JavaScript XML. It allows you to write HTML-like syntax in your JavaScript code.',
    points: 10
  },
  {
    id: '4',
    text: 'Which hook is used for side effects in React?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'useState', isCorrect: false },
      { id: 'b', text: 'useEffect', isCorrect: true },
      { id: 'c', text: 'useContext', isCorrect: false },
      { id: 'd', text: 'useReducer', isCorrect: false }
    ],
    correctAnswer: 'useEffect',
    explanation: 'useEffect is used for side effects like API calls, subscriptions, or manually changing the DOM.',
    points: 10
  }
];

// Sample quiz data
export const mockQuizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of core JavaScript concepts including data types, functions, and ES6 features.',
    difficulty: 'medium',
    questions: jsQuestions,
    createdBy: 'user-1',
    createdAt: new Date('2025-01-05'),
    isPublic: true
  },
  {
    id: 'quiz-2',
    title: 'React Basics',
    description: 'Learn the fundamentals of React including components, JSX, hooks, and state management.',
    difficulty: 'easy',
    questions: reactQuestions,
    createdBy: 'user-1',
    createdAt: new Date('2025-01-08'),
    isPublic: true
  },
  {
    id: 'quiz-3',
    title: 'Advanced TypeScript',
    description: 'Dive deep into TypeScript with generics, utility types, and advanced type manipulation techniques.',
    difficulty: 'hard',
    questions: [], // We'll add more questions later
    createdBy: 'user-2',
    createdAt: new Date('2025-01-10'),
    isPublic: true
  },
  {
    id: 'quiz-4',
    title: 'CSS Grid & Flexbox',
    description: 'Master modern CSS layout techniques with practical examples and real-world scenarios.',
    difficulty: 'medium',
    questions: [], // We'll add more questions later
    createdBy: 'user-1',
    createdAt: new Date('2025-01-12'),
    isPublic: true
  }
];

// Mock user data
export const mockUser = {
  id: 'user-1',
  email: 'john@example.com',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  createdAt: new Date('2024-12-01')
};
