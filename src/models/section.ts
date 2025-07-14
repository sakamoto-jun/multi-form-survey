import { makeAutoObservable } from "mobx";
import Question from "./question";

type SectionData = {
  id: number;
  title: string;
  questions: Question[];
};

export default class Section implements SectionData {
  public id: number;
  public title: string;
  public questions: Question[];

  constructor(
    data: SectionData = {
      id: Date.now(),
      title: "",
      questions: [new Question()],
    }
  ) {
    makeAutoObservable(this);
    this.id = data.id;
    this.title = data.title;
    this.questions = data.questions;
  }

  addQuestion() {
    this.questions.push(new Question());
  }
  removeQuestion(id: number) {
    this.questions.filter((question) => question.id !== id);
  }
  copyQuestion(id: number) {
    const question = this.questions.find((question) => question.id === id);

    if (question) {
      this.questions.push(
        new Question({
          ...question,
          id: Date.now(),
        })
      );
    }
  }
}
