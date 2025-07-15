import clsx from "clsx";
import PlusIcon from "../../assets/icons/add_circle.svg?react";
import SectionPlusIcon from "../../assets/icons/view_comfy.svg?react";
import { useSurveyStore } from "../../store";

const EditorMenu = ({ className }: Cn) => {
  const surveyStore = useSurveyStore();

  return (
    <div
      className={clsx(
        "flex flex-col gap-y-26 px-13 py-26 bg-white rounded-10 shadow-sm",
        className
      )}
    >
      <button onClick={surveyStore.addQuestion}>
        <PlusIcon />
      </button>
      <button onClick={surveyStore.addSection}>
        <SectionPlusIcon />
      </button>
    </div>
  );
};

export default EditorMenu;
