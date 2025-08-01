import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import useSurveyId from "../../hooks/domain/useSurveyId";
import { useSurveyStore } from "../../store";
import { QuestionData, SectionData } from "../../types/app";
import callApi from "../../utils/api";
import SectionView from "./SectionView";

const SectionListViewBase = () => {
  const surveyStore = useSurveyStore();
  const [currentSection, setCurrentSection] = useState(0);
  const data = useRef<
    Record<SectionData["id"], Record<QuestionData["id"], string | string[]>>
  >({});
  const last = currentSection === surveyStore.sections.length - 1;
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  const handleNext = async () => {
    if (last) {
      await callApi(`/surveys/${surveyId}/responses`, {
        method: "POST",
        body: data.current,
      });

      navigate(
        `/surveys/${surveyId}/complete?title=${surveyStore.sections[0].title}`
      );
      return;
    }
    setCurrentSection((prev) => prev + 1);
  };
  const handleSave = (
    sectionData: Record<QuestionData["id"], string | string[]>
  ) => {
    data.current[surveyStore.sections[currentSection].id] = sectionData;
  };

  return (
    <SectionView
      section={surveyStore.sections[currentSection]}
      last={last}
      onNext={handleNext}
      onSave={handleSave}
    />
  );
};

const SectionListView = observer(SectionListViewBase);

export default SectionListView;
