import { observer } from "mobx-react-lite";
import DropdownIcon from "../../assets/icons/add_circle.svg?react";
import DateIcon from "../../assets/icons/calendar_today.svg?react";
import CheckboxIcon from "../../assets/icons/check_circle.svg?react";
import ShortTextIcon from "../../assets/icons/check_indeterminate_small.svg?react";
import MultipleChoiceIcon from "../../assets/icons/checklist.svg?react";
import TimeIcon from "../../assets/icons/schedule.svg?react";
import LongTextIcon from "../../assets/icons/subject.svg?react";
import Question from "../../models/question";
import { QuestionType } from "../../types/app";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import Panel, { PanelBody, PanelHeader } from "../common/Panel";
import QuestionBodyEditor from "./QuestionBodyEditor";

interface QuestionEditorProps {
  question: Question;
}

const QuestionEditorBase = ({ question }: QuestionEditorProps) => {
  return (
    <Panel>
      <PanelHeader className="flex mb-25">
        <Input className="flex-1 mr-30" />
        <Dropdown<QuestionType>
          defaultValue={question.type}
          onChange={(value) => question.setType(value)}
          options={[
            {
              label: (
                <div className="flex items-center gap-10">
                  <ShortTextIcon />
                  <span>단답형</span>
                </div>
              ),
              value: "shortText",
            },
            {
              label: (
                <div className="flex items-center gap-10">
                  <LongTextIcon />
                  <span>장문형</span>
                </div>
              ),
              value: "longText",
            },
            {
              label: (
                <div className="flex items-center gap-10">
                  <MultipleChoiceIcon />
                  <span>객관식 질문</span>
                </div>
              ),
              value: "multipleChoice",
            },
            {
              label: (
                <div className="flex items-center gap-10">
                  <CheckboxIcon />
                  <span>체크박스</span>
                </div>
              ),
              value: "checkbox",
            },
            {
              label: (
                <div className="flex items-center gap-10">
                  <DropdownIcon />
                  <span>드롭다운</span>
                </div>
              ),
              value: "dropdown",
            },
            {
              label: (
                <div className="flex items-center gap-10">
                  <DateIcon />
                  <span>날짜</span>
                </div>
              ),
              value: "date",
            },
            {
              label: (
                <div className="flex items-center gap-10">
                  <TimeIcon />
                  <span>시간</span>
                </div>
              ),
              value: "time",
            },
          ]}
        />
      </PanelHeader>
      <PanelBody>
        <QuestionBodyEditor type={question.type} />
      </PanelBody>
    </Panel>
  );
};

const QuestionEditor = observer(QuestionEditorBase);

export default QuestionEditor;
