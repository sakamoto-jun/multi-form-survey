import { toJS } from "mobx";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import SectionListEditor from "../components/edit/SectionListEditor";
import SendModalContent from "../components/edit/SendModalContent";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";

const EditPage = () => {
  const surveyStore = useSurveyStore();
  const { surveyId = "" } = useParams<{ surveyId: string }>();
  const { hash } = useLocation();
  const [opened, setOpened] = useState(hash === "#send");

  useEffect(() => {
    const id = parseInt(surveyId, 10);

    if (id) {
      surveyStore.fetchSurvey(id);
    }
  }, [surveyStore, surveyId]);

  const handleSubmit = async () => {
    await callApi(`/surveys/${surveyId}`, {
      method: "PUT",
      body: toJS({ sections: surveyStore.sections }),
    });
    setOpened(true);
  };

  return (
    <>
      <Button className="absolute top-0 right-0" onClick={handleSubmit}>
        보내기
      </Button>
      <SectionListEditor />
      <Modal opened={opened}>
        <SendModalContent
          surveyId={parseInt(surveyId, 10)}
          emailCollected={surveyStore.emailCollected}
          onClose={() => setOpened(false)}
        />
      </Modal>
    </>
  );
};

export default EditPage;
