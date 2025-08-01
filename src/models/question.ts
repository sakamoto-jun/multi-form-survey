import { makeAutoObservable } from "mobx";
import { QuestionData, QuestionType } from "../types/app";

export default class Question implements QuestionData {
  public id: number;
  public title: string;
  public type: QuestionType;
  public required: boolean;
  public options?: string[];

  constructor(
    data: QuestionData = {
      id: Date.now(),
      title: "",
      type: "shortText",
      required: false,
    }
  ) {
    makeAutoObservable(this);
    this.id = data.id;
    this.title = data.title;
    this.type = data.type;
    this.required = data.required;
    this.options = data.options;
  }

  setTitle = (title: string) => {
    this.title = title;
  };
  setType = (type: QuestionType) => {
    this.type = type;

    if (
      type === "checkbox" ||
      type === "dropdown" ||
      type === "multipleChoice"
    ) {
      this.options = this.options ?? [""];
    } else {
      this.options = undefined;
    }
  };
  setRequired = (required: boolean) => {
    this.required = required;
  };
  setOption = (index: number, option: string) => {
    if (!this.options) return;
    this.options[index] = option;
  };
  setOptions = (options: string[]) => {
    this.options = options;
  };
}
