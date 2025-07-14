import { observer } from "mobx-react-lite";
import Section from "../../models/section";
import QuestionEditor from "./QuestionEditor";

interface SectionEditorProps {
  section: Section;
}

const SectionEditorBase = ({ section }: SectionEditorProps) => {
  return (
    <div>
      {section.questions.map((question) => (
        <QuestionEditor key={question.id} question={question} />
      ))}
    </div>
  );
};

const SectionEditor = observer(SectionEditorBase);

export default SectionEditor;
