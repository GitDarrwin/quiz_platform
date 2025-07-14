import { useState, useEffect } from 'react';

'use client';

interface QuizQuestionProps {
    question: string;
    options: string[];
    correctAnswer: string;
    timeLimit: number; // Time limit in seconds
    onAnswer: (isCorrect: boolean, timeRemaining: number) => void;
}

export default function QuizQuestion(props: QuizQuestionProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
            {/* Question Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {props.question}
                </h2>
            </div>

            {/* Timer Section - We'll add this next */}
            <div className="mb-6">
                <div className="text-right text-lg font-semibold text-blue-600">
                    ⏰ Time: {props.timeLimit}s
                </div>
            </div>

            {/* Options Section */}
            <div className="space-y-3">
                {props.options.map((option, index) => (
                    <button
                        key={index}
                        className="w-full p-4 text-left bg-gray-100 hover:bg-blue-100 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all"
                        onClick={() => {
                            // For now, just check if it's correct
                            const isCorrect = option === props.correctAnswer;
                            props.onAnswer(isCorrect, props.timeLimit);
                        }}
                    >
                        <span className="font-medium">
                            {String.fromCharCode(65 + index)}. {option}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}