// This is our first reusable component with TypeScript!
// We'll use it to display quiz cards on our homepage

import { Quiz } from '@/types';

// Props interface - defines what data this component expects
interface QuizCardProps {
  quiz: Quiz;
  onStart: (quizId: string) => void;
  className?: string; // Optional additional CSS classes
}

// React.FC means "React Functional Component"
// The <QuizCardProps> tells TypeScript what props this component expects
export const QuizCard: React.FC<QuizCardProps> = ({ 
  quiz, 
  onStart, 
  className = '' 
}) => {
  // Helper function to get difficulty color
  const getDifficultyColor = (difficulty: Quiz['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Helper function to format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 ${className}`}>
      {/* Quiz Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {quiz.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
          {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
        </span>
      </div>

      {/* Quiz Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {quiz.description}
      </p>

      {/* Quiz Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span className="flex items-center">
          <span className="mr-1">📝</span>
          {quiz.questions.length} questions
        </span>
        <span className="flex items-center">
          <span className="mr-1">📅</span>
          {formatDate(quiz.createdAt)}
        </span>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onStart(quiz.id)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Start Quiz
      </button>
    </div>
  );
};
