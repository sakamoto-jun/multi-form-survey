import { useEffect } from "react";
import { useParams } from "react-router";
import SectionListView from "../components/form/SectionListView";
import { useSurveyStore } from "../store";

const FormPage = () => {
  const surveyStore = useSurveyStore();
  const { surveyId = "" } = useParams<{ surveyId: string }>();

  useEffect(() => {
    const id = parseInt(surveyId, 10);

    if (id) {
      surveyStore.fetchSurvey(id);
    }
  }, [surveyStore, surveyId]);

  return <SectionListView />;
};

export default FormPage;
