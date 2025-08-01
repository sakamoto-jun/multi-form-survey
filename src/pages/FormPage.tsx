import { useEffect, useState } from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SectionListView from "../components/form/SectionListView";
import useSurveyId from "../hooks/domain/useSurveyId";
import { useSurveyStore } from "../store";

const FormPage = () => {
  const surveyStore = useSurveyStore();
  const surveyId = useSurveyId();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await surveyStore.fetchSurvey(surveyId);
      surveyStore.init("form", data);
      setLoaded(true);
    };

    if (surveyId) {
      load();
    }
  }, [surveyStore, surveyId]);

  if (!loaded) return <LoadingSpinner />;

  return <SectionListView />;
};

export default FormPage;
