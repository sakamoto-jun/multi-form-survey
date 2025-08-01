import Question from "../models/question";

export type SectionData = {
  id: number;
  title: string;
  description: string;
  questions: Question[];
};

export type QuestionType =
  | "shortText"
  | "longText"
  | "multipleChoice"
  | "checkbox"
  | "dropdown"
  | "date"
  | "time";

export type QuestionData = {
  id: number;
  title: string;
  type: QuestionType;
  required: boolean;
  options?: string[];
};
