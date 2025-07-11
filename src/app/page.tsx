'use client';

import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-blue-500 text-white p-8">
      <h1>My Quiz App</h1>
      <p>Welcome to my quiz platform!</p>
      <Button text="Click Me!" onClick={() => alert("Button clicked!")} />
      <Button text="Submit Form" onClick={() => alert("Form submitted!")} />
      <Button text="Cancel" onClick={() => alert("Action canceled!")} />
    </div>
  );
}
