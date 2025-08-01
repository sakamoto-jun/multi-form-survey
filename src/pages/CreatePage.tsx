import { toJS } from "mobx";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import SectionListEditor from "../components/edit/SectionListEditor";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";

const CreatePage = () => {
  const surveyStore = useSurveyStore();
  const navigate = useNavigate();

  useEffect(() => {
    surveyStore.init("create");
  }, [surveyStore]);

  const handleSubmit = async () => {
    const { id } = await callApi<{ id: number }>("/surveys", {
      method: "POST",
      body: toJS({ sections: surveyStore.sections }),
    });

    navigate(`/surveys/${id}/edit#send`);
  };

  return (
    <>
      <Button className="absolute -top-30 right-0 z-20" onClick={handleSubmit}>
        보내기
      </Button>
      <SectionListEditor />
    </>
  );
};

export default CreatePage;
