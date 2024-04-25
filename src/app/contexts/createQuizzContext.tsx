"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Context = {
  quizzName: string;
  quizzQuestions: QuizzQuestionType[];
  setQuizzName: React.Dispatch<React.SetStateAction<string>>;
  setQuizzQuestions: React.Dispatch<React.SetStateAction<QuizzQuestionType[]>>;
};

type QuizzQuestionType = {
  question: string;
  answers: string[];
  correctAnswers: string[];
};

// Just find-replace "XContext" with whatever context name you like. (ie. DankContext)
const CreateQuizzContext = createContext<Context | null>(null);

export const CreateQuizzContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [quizzName, setQuizzName] = useState("");
  const [quizzQuestions, setQuizzQuestions] = useState([
    {} as QuizzQuestionType,
  ]);

  return (
    <CreateQuizzContext.Provider
      value={{ quizzName, quizzQuestions, setQuizzName, setQuizzQuestions }}
    >
      {props.children}
    </CreateQuizzContext.Provider>
  );
};

export const QuizzContext = (questionIndex?: number) => {
  const context = useContext(CreateQuizzContext);

  if (questionIndex) {
    return context?.quizzQuestions[questionIndex];
  }

  return context;
};
