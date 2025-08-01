import { Controller, useFormContext } from "react-hook-form";
import Question from "../../models/question";
import Checkbox from "../common/Checkbox";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import Radio from "../common/Radio";
import Textarea from "../common/Textarea";

interface QuestionFormProps {
  question: Question;
}

const QuestionForm = ({ question }: QuestionFormProps) => {
  const { register, control } = useFormContext();

  switch (question.type) {
    case "shortText":
      return (
        <Input
          className="w-full pt-0 pb-16 border-b-2 focus:border-b-main focus:bg-transparent"
          {...register(`${question.id}`, {
            required: {
              value: question.required,
              message: "필수 항목 입니다.",
            },
          })}
        />
      );
    case "date":
      return (
        <Input
          type="date"
          {...register(`${question.id}`, {
            required: {
              value: question.required,
              message: "필수 항목 입니다.",
            },
          })}
        />
      );
    case "time":
      return (
        <Input
          type="time"
          {...register(`${question.id}`, {
            required: {
              value: question.required,
              message: "필수 항목 입니다.",
            },
          })}
        />
      );
    case "dropdown":
      return (
        <Controller
          name={`${question.id}`}
          control={control}
          defaultValue={question.options?.[0]}
          render={({ field }) => (
            <Dropdown
              defaultValue={question.options?.[0]}
              options={question.options!.map((option) => ({
                label: <span>{option}</span>,
                value: option,
              }))}
              onChange={field.onChange}
            />
          )}
          rules={{
            required: {
              value: question.required,
              message: "필수 항목 입니다.",
            },
          }}
        />
      );
    case "longText":
      return (
        <Textarea
          className="w-full pt-0 pb-16 border-b-2 focus:border-b-main focus:bg-transparent"
          {...register(`${question.id}`, {
            required: {
              value: question.required,
              message: "필수 항목 입니다.",
            },
          })}
        />
      );
    case "multipleChoice":
      return (
        <div className="flex flex-col gap-y-20">
          {question.options!.map((option) => (
            <Radio
              key={option}
              label={option}
              value={option}
              {...register(`${question.id}`, {
                required: {
                  value: question.required,
                  message: "필수 항목 입니다.",
                },
              })}
            />
          ))}
        </div>
      );
    case "checkbox":
      return (
        <div className="flex flex-col gap-y-20">
          {question.options!.map((option) => (
            <Checkbox
              key={option}
              label={option}
              value={option}
              {...register(`${question.id}`, {
                required: {
                  value: question.required,
                  message: "필수 항목 입니다.",
                },
              })}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default QuestionForm;
