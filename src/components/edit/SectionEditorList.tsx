import { useSurveyStore } from "../../store";
import SectionEditor from "./SectionEditor";

const SectionEditorList = () => {
  const surveyStore = useSurveyStore();

  return (
    <div className="relative">
      <div className="absolute top-0 -right-50">
        <button onClick={() => surveyStore.addQuestion()}>➕</button>
      </div>
      <div>
        {surveyStore.sections.map((section) => (
          <SectionEditor key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default SectionEditorList;
