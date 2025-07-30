import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Question from "../../models/question";
import Panel, { PanelBody, PanelHeader } from "../common/Panel";
import QuestionForm from "./QuestionForm";

interface QuestionViewProps {
  question: Question;
}

const QuestionView = ({ question }: QuestionViewProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <Panel className={clsx({ "border border-red-500": errors[question.id] })}>
      <PanelHeader className="flex mb-31">
        <h6 className="text-16 text-gray900 font-medium">{question.title}</h6>
      </PanelHeader>
      <PanelBody>
        <QuestionForm question={question} />
        {errors[question.id] && (
          <p className="text-red-500 text-14 mt-10">
            {errors[question.id]?.message?.toString() || "필수 항목 입니다."}
          </p>
        )}
      </PanelBody>
    </Panel>
  );
};

export default QuestionView;
