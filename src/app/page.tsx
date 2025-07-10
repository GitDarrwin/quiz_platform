// Import our components and data
import { QuizCard } from '@/components/QuizCard';
import { mockQuizzes } from '@/data/mockData';

// This is a React component - think of it as a reusable piece of UI
// The 'export default' makes this the main component of this file
export default function Home() {
  // Event handler function - called when user clicks "Start Quiz"
  const handleStartQuiz = (quizId: string) => {
    console.log('Starting quiz:', quizId);
    // Later we'll navigate to the quiz page
    alert(`Starting quiz ${quizId} - we'll implement navigation next!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                🧠 QuizMaster AI
              </h1>
            </div>
            <nav className="flex space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign Up
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Master Any Subject with
            <span className="text-blue-600"> AI-Powered Quizzes</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Create, take, and master quizzes with the help of artificial intelligence. 
            Adaptive learning that grows with you.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-10 flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              Start Learning
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
              Create Quiz
            </button>
          </div>
        </div>

        {/* Featured Quizzes Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🔥 Popular Quizzes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {mockQuizzes.slice(0, 4).map((quiz) => (
              <QuizCard
                key={quiz.id}
                quiz={quiz}
                onStart={handleStartQuiz}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI-Generated Questions
            </h3>
            <p className="text-gray-600">
              Our AI creates personalized questions based on your learning goals and performance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Progress Tracking
            </h3>
            <p className="text-gray-600">
              Track your learning progress with detailed analytics and performance insights.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Real-time Multiplayer
            </h3>
            <p className="text-gray-600">
              Compete with friends and learners worldwide in real-time quiz battles.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">50K+</div>
              <div className="text-gray-600">Quizzes Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">1M+</div>
              <div className="text-gray-600">Questions Answered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">🧠 QuizMaster AI</h3>
            <p className="text-gray-400">
              Building the future of interactive learning
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
