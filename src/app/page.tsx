'use client';

import QuizQuestion from "@/components/QuizQuestion";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-blue-500 text-white p-8">
      <h1>My Quiz App</h1>
      <p>Welcome to my quiz platform!</p>
      <Button text="Click Me!" onClick={() => alert("Button clicked!")} />
      <Button text="Submit Form" onClick={() => alert("Form submitted!")} />
      <Button text="Cancel" onClick={() => alert("Action canceled!")} />
      <QuizQuestion
        question="What is the capital of France?"
        options={["Berlin", "Madrid", "Paris", "Rome"]}
        correctAnswer="Paris"
        timeLimit={30}
        onAnswer={(isCorrect, timeRemaining) => {
          alert(`Your answer is ${isCorrect ? "correct" : "incorrect"}! Time remaining: ${timeRemaining}s`);
        }}
        />
    </div>
  );
}


