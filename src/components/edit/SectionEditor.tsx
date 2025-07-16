import { observer } from "mobx-react-lite";
import Section from "../../models/section";
import QuestionEditor from "./QuestionEditor";
import SectionTitleEditor from "./SectionTitleEditor";

interface SectionEditorProps {
  capTitle: string;
  section: Section;
  onChangeFocus: (id: number) => void;
}

const SectionEditorBase = ({
  capTitle,
  section,
  onChangeFocus,
}: SectionEditorProps) => {
  const handleClickContainer = () => onChangeFocus(section.id);

  return (
    <div className="[&>*]:mb-24 py-10" onClick={handleClickContainer}>
      <SectionTitleEditor capTitle={capTitle} section={section} />
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
