import { toJS } from "mobx";
import { useEffect } from "react";
import { useParams } from "react-router";
import SectionEditorList from "../components/edit/SectionEditorList";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";

const EditPage = () => {
  const surveyStore = useSurveyStore();
  const { surveyId } = useParams<{ surveyId: string }>();

  useEffect(() => {
    const id = parseInt(surveyId ?? "", 10);

    if (id) {
      surveyStore.fetchSurvey(id);
    }
  }, [surveyStore, surveyId]);

  const handleSubmit = () => {
    callApi(`/surveys/${surveyId}`, {
      method: "PUT",
      body: toJS({ sections: surveyStore.sections }),
    });
  };

  return (
    <>
      <div>
        <button onClick={handleSubmit}>Edit</button>
      </div>
      <SectionEditorList />
    </>
  );
};

export default EditPage;
