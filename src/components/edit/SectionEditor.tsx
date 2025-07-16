import { observer } from "mobx-react-lite";
import Section from "../../models/section";
import QuestionEditor from "./QuestionEditor";
import SectionTitleEditor from "./SectionTitleEditor";

interface SectionEditorProps {
  section: Section;
}

const SectionEditorBase = ({ section }: SectionEditorProps) => {
  return (
    <div className="[&>*]:mb-24 py-10">
      <SectionTitleEditor capTitle="2개 중 1 섹션" section={section} />
      {section.questions.map((question) => (
        <QuestionEditor
          key={question.id}
          question={question}
          onCopy={section.copyQuestion}
          onDelete={section.removeQuestion}
        />
      ))}
    </div>
  );
};

const SectionEditor = observer(SectionEditorBase);

export default SectionEditor;
