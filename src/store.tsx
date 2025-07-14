import { makeAutoObservable } from "mobx";
import { createContext, PropsWithChildren, useContext } from "react";
import Section from "./models/section";

class SurveyStore {
  sections: Section[];
  focusedSectionId: number | null;

  constructor() {
    makeAutoObservable(this);
    this.sections = [new Section()];
    this.focusedSectionId = this.sections[0].id;
  }

  addSection() {
    const section = new Section();

    this.sections.push(section);
    this.focusedSectionId = section.id;
  }
  addQuestion() {
    const currentSection = this.sections.find(
      (section) => section.id === this.focusedSectionId
    );

    if (currentSection) {
      currentSection.addQuestion();
    }
  }
}

const surveyStore = new SurveyStore();

const SurveyStoreContext = createContext(surveyStore);
// eslint-disable-next-line react-refresh/only-export-components
export const useSurveyStore = () => useContext(SurveyStoreContext);

export const SurveyStoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <SurveyStoreContext.Provider value={surveyStore}>
      {children}
    </SurveyStoreContext.Provider>
  );
};
