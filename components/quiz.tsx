"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type QuizComponentProps = {
  questions: Question[];
};

function Quiz({ questions }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswer(option);

    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <Card className="w-full max-w-md mx-auto mt-4">
        <CardHeader>
          <CardTitle>Quiz Complete</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-xl mb-4">
              Your score: {score} out of {questions.length}.
            </p>
            <Button onClick={resetQuiz} className="w-full">
              Restart quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader>
        <CardTitle>CPACC Sample Question</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-lg font-semibold mb-4">
            {currentQuestionData.question}
          </p>

          {currentQuestionData.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full mb-2 ${
                selectedAnswer === option
                  ? option === currentQuestionData.answer
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
              variant="outline"
            >
              {option}
            </Button>
          ))}

          {selectedAnswer && (
            <div className="mt-4">
              {selectedAnswer === currentQuestionData.answer ? (
                <p className="text-green-600 font-bold">Correct!</p>
              ) : (
                <p className="text-red-600 font-bold">
                  Incorrect. The correct answer is: {currentQuestionData.answer}
                </p>
              )}

              <div className="mt-4 p-3 bg-gray-100 rounded-md">
                <p className="font-semibold mb-2">Explanation:</p>
                <p>{currentQuestionData.explanation}</p>
              </div>

              <Button onClick={handleNextQuestion} className="w-full mt-2">
                {currentQuestion < questions.length - 1
                  ? "Next question"
                  : "Finish quiz"}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Quiz;
