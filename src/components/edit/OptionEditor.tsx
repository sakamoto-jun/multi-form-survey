import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import CheckboxIcon from "../../assets/icons/check_box_outline_blank.svg?react";
import RadioIcon from "../../assets/icons/radio_button_unchecked.svg?react";
import Question from "../../models/question";
import { QuestionType } from "../../types/app";
import Input from "../common/Input";

interface OptionEditorProps {
  question: Question;
}

const OptionEditorBase = ({
  question: { options = [], type, setOption, setOptions },
}: OptionEditorProps) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-14">
          {icons[type]}
          <Input
            value={option}
            onChange={(e) => {
              setOption(index, e.target.value);
            }}
          />
        </div>
      ))}
      <div className="flex items-center gap-14 my-24">
        {icons[type]}
        <button
          type="button"
          className="text-gray500 text-16"
          onClick={() =>
            setOptions(options.concat(`옵션 ${options.length + 1}`))
          }
        >
          옵션 추가
        </button>
      </div>
    </div>
  );
};

const icons: Partial<Record<QuestionType, ReactNode>> = {
  multipleChoice: <RadioIcon />,
  checkbox: <CheckboxIcon />,
  dropdown: <RadioIcon />,
};

const OptionEditor = observer(OptionEditorBase);

export default OptionEditor;
