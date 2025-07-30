import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../store";
import EditorMenu from "./EditorMenu";
import SectionEditor from "./SectionEditor";

const SectionListEditorBase = () => {
  const surveyStore = useSurveyStore();

  return (
    <div className="relative">
      <EditorMenu className="fixed bottom-30 left-[calc(100%-72px)] sm:top-[273px] sm:bottom-auto sm:left-[calc(50%+340px)]" />
      <div>
        {surveyStore.sections.map((section, i) => (
          <SectionEditor
            key={section.id}
            capTitle={`${surveyStore.sections.length}개 중 ${i + 1}섹션`}
            section={section}
            onChangeFocus={surveyStore.setFocusedSectionId}
          />
        ))}
      </div>
    </div>
  );
};

const SectionListEditor = observer(SectionListEditorBase);

export default SectionListEditor;
