import { Link, useSearchParams } from "react-router-dom";
import Panel, {
  PanelBody,
  PanelCap,
  PanelHeader,
} from "../components/common/Panel";
import useSurveyId from "../hooks/domain/useSurveyId";

const CompletePage = () => {
  const [searchParams] = useSearchParams();
  const surveyId = useSurveyId();

  return (
    <div>
      <PanelCap />
      <Panel className="text-gray900">
        <PanelHeader className="text-24 font-semibold mb-12">
          <h5>{searchParams.get("title") ?? "설문 완료"}</h5>
        </PanelHeader>
        <PanelBody>
          <p className="mb-16">응답이 기록되었습니다.</p>
          <Link
            className="border-b-1 border-b-blue-500 text-blue-500"
            to={`/surveys/${surveyId}`}
          >
            다른 응답 제출
          </Link>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default CompletePage;
