import { ReactNode, useState } from "react";
import CheckboxIcon from "../../assets/icons/check_box_outline_blank.svg?react";
import RadioIcon from "../../assets/icons/radio_button_unchecked.svg?react";
import { QuestionType } from "../../types/app";
import Input from "../common/Input";

interface OptionEditorProps {
  type: QuestionType;
}

export default function OptionEditor({ type }: OptionEditorProps) {
  const [options, setOptions] = useState<string[]>([""]);

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-14">
          {icons[type]}
          <Input
            value={option}
            onChange={(e) => {
              const newOptions = [...options];

              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        </div>
      ))}
      <div className="flex items-center gap-14 mt-28">
        {icons[type]}
        <button
          className="text-gray500 text-16"
          onClick={() => setOptions((prev) => prev.concat(""))}
        >
          옵션 추가
        </button>
      </div>
    </div>
  );
}

const icons: Partial<Record<QuestionType, ReactNode>> = {
  multipleChoice: <RadioIcon />,
  checkbox: <CheckboxIcon />,
  dropdown: <RadioIcon />,
};
