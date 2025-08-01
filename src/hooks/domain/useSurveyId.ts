import { useParams } from "react-router";

export default function useSurveyId() {
  const { surveyId } = useParams<{ surveyId: string }>();
  const id = parseInt(surveyId ?? "", 10);

  if (isNaN(id)) {
    throw new Error("유효하지 않은 surveyId 입니다.");
  }

  return id;
}
