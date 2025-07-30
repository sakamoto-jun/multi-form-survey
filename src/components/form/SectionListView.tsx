import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useSurveyStore } from "../../store";
import SectionView from "./SectionView";

const SectionListViewBase = () => {
  const surveyStore = useSurveyStore();
  const [currentSection, setCurrentSection] = useState(0);
  const data = useRef<object[]>([]);
  const last = currentSection === surveyStore.sections.length - 1;

  const handleNext = () => {
    if (last) {
      console.log(data.current);
      return;
    }
    setCurrentSection((prev) => prev + 1);
  };
  const handleSave = (sectionData: object) => {
    data.current[currentSection] = sectionData;
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
