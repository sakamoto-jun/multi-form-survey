import { toJS } from "mobx";
import SectionEditorList from "../components/edit/SectionEditorList";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";

const CreatePage = () => {
  const surveyStore = useSurveyStore();

  const handleSubmit = () => {
    callApi("/surveys", {
      method: "POST",
      body: toJS({ sections: surveyStore.sections }),
    });
  };

  return (
    <>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <SectionEditorList />
    </>
  );
};

export default CreatePage;
