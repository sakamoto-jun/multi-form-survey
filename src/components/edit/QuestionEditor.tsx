import { observer } from "mobx-react-lite";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import CopyIcon from "../../assets/icons/filter_none.svg?react";
import Question from "../../models/question";
import Divider from "../common/Divider";
import Input from "../common/Input";
import Panel, { PanelBody, PanelFooter, PanelHeader } from "../common/Panel";
import Switch from "../common/Switch";
import QuestionBodyEditor from "./QuestionBodyEditor";
import QuestionTypeEditor from "./QuestionTypeEditor";

interface QuestionEditorProps {
  question: Question;
  onCopy: (id: number) => void;
  onDelete: (id: number) => void;
}

const QuestionEditorBase = ({
  question,
  onCopy,
  onDelete,
}: QuestionEditorProps) => {
  return (
    <Panel className="border-l-5 border-l-transparent focus-within:border-l-main">
      <PanelHeader className="flex mb-25">
        <Input
          className="flex-1 mr-30"
          value={question.title}
          onChange={(e) => question.setTitle(e.target.value)}
        />
        <QuestionTypeEditor type={question.type} onChange={question.setType} />
      </PanelHeader>
      <PanelBody>
        <QuestionBodyEditor type={question.type} />
      </PanelBody>
      <PanelFooter className="flex justify-end items-stretch gap-x-24 h-24 mt-20">
        <button onClick={() => onCopy(question.id)}>
          <CopyIcon />
        </button>
        <button onClick={() => onDelete(question.id)}>
          <DeleteIcon />
        </button>
        <Divider direction="vertical" />
        <div className="flex items-center">
          <span className="mr-13">필수</span>
          <Switch checked={question.required} onChange={question.setRequired} />
        </div>
      </PanelFooter>
    </Panel>
  );
};

const QuestionEditor = observer(QuestionEditorBase);

export default QuestionEditor;
