import { FormProvider, useForm } from "react-hook-form";
import Section from "../../models/section";
import { QuestionData } from "../../types/app";
import Button from "../common/Button";
import QuestionView from "./QuestionView";
import SectionTitleView from "./SectionTitleView";

interface SectionViewProps {
  section: Section;
  last: boolean;
  onNext: () => void;
  onSave: (data: Record<QuestionData["id"], string | string[]>) => void;
}

const SectionView = ({ section, last, onNext, onSave }: SectionViewProps) => {
  const methods = useForm();

  const handleSubmitData = (
    data: Record<QuestionData["id"], string | string[]>
  ) => {
    onSave(data);
    onNext();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="[&>*]:mb-24 text-gray900"
        onSubmit={methods.handleSubmit(handleSubmitData)}
      >
        <SectionTitleView section={section} />
        {section.questions.map((question) => (
          <QuestionView key={question.id} question={question} />
        ))}
        <Button type="submit">{last ? "제출" : "다음"}</Button>
      </form>
    </FormProvider>
  );
};

export default SectionView;
