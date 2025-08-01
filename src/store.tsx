import { makeAutoObservable } from "mobx";
import { createContext, PropsWithChildren, useContext } from "react";
import Section from "./models/section";
import { SectionData } from "./types/app";
import callApi from "./utils/api";

class SurveyStore {
  public emailCollected: boolean = false;
  public sections: Section[] = [];
  public focusedSectionId: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  init = (
    mode: "create" | "form",
    data?: { sections: SectionData[]; emailCollected?: boolean }
  ) => {
    if (mode === "create") {
      const section = new Section();
      this.sections = [section];
      this.focusedSectionId = section.id;
      this.emailCollected = false;
    }

    if (mode === "form" && data) {
      this.sections = data.sections.map((section) => new Section(section));
      this.focusedSectionId = this.sections[0]?.id ?? null;
      this.emailCollected = data.emailCollected ?? false;
    }
  };
  setFocusedSectionId = (id: number) => {
    if (this.focusedSectionId !== id) {
      this.focusedSectionId = id;
    }
  };
  addSection = () => {
    const newSection = new Section();

    this.sections.push(newSection);
    this.focusedSectionId = newSection.id;
  };
  addQuestion = () => {
    const currentSection = this.sections.find(
      (section) => section.id === this.focusedSectionId
    );

    if (currentSection) {
      currentSection.addQuestion();
    }
  };
  fetchSurvey = async (id: number) => {
    const res = await callApi<{
      sections: SectionData[];
      emailCollected: boolean;
    }>(`/surveys/${id}`);

    return res;
  };
}

const surveyStore = new SurveyStore();
const SurveyStoreContext = createContext(surveyStore);

// eslint-disable-next-line react-refresh/only-export-components
export const useSurveyStore = () => useContext(SurveyStoreContext); // 커스텀 훅

export const SurveyStoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <SurveyStoreContext.Provider value={surveyStore}>
      {children}
    </SurveyStoreContext.Provider>
  );
};
