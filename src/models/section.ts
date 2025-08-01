import { makeAutoObservable } from "mobx";
import { SectionData } from "../types/app";
import Question from "./question";

export default class Section implements SectionData {
  public id: number;
  public title: string;
  public description: string;
  public questions: Question[];

  constructor(
    data: SectionData = {
      id: Date.now(),
      title: "",
      description: "",
      questions: [new Question()],
    }
  ) {
    makeAutoObservable(this);
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.questions = data.questions.map((question) => new Question(question));
  }

  setTitle = (title: string) => {
    this.title = title;
  };
  setDescription = (description: string) => {
    this.description = description;
  };
  addQuestion = () => {
    this.questions.push(new Question());
  };
  removeQuestion = (id: number) => {
    this.questions = this.questions.filter((question) => question.id !== id);
  };
  copyQuestion = (id: number) => {
    const question = this.questions.find((question) => question.id === id);

    if (question) {
      this.questions.push(
        new Question({
          ...question,
          id: Date.now(),
        })
      );
    }
  };
}
