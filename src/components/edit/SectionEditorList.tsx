import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../store";
import EditorMenu from "./EditorMenu";
import SectionEditor from "./SectionEditor";

const SectionEditorListBase = () => {
  const surveyStore = useSurveyStore();

  return (
    <div className="relative">
      <EditorMenu className="fixed bottom-30 left-[calc(100%-72px)] sm:top-[273px] sm:bottom-auto sm:left-[calc(50%+340px)]" />
      <div>
        {surveyStore.sections.map((section) => (
          <SectionEditor key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

const SectionEditorList = observer(SectionEditorListBase);

export default SectionEditorList;
