import { toJS } from "mobx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Button from "../components/common/Button";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Modal from "../components/common/Modal";
import SectionListEditor from "../components/edit/SectionListEditor";
import SendModalContent from "../components/edit/SendModalContent";
import useModal from "../hooks/common/useModal";
import useSurveyId from "../hooks/domain/useSurveyId";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";

const EditPage = () => {
  const surveyStore = useSurveyStore();
  const surveyId = useSurveyId();
  const { hash } = useLocation();
  const { opened, open, close } = useModal(hash === "#send");
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

  const handleSubmit = async () => {
    await callApi(`/surveys/${surveyId}`, {
      method: "PUT",
      body: toJS({ sections: surveyStore.sections }),
    });
    open();
  };

  if (!loaded) return <LoadingSpinner />;
  return (
    <>
      <Button className="absolute top-0 right-0" onClick={handleSubmit}>
        보내기
      </Button>
      <SectionListEditor />
      <Modal opened={opened}>
        <SendModalContent
          surveyId={surveyId}
          emailCollected={surveyStore.emailCollected}
          onClose={close}
        />
      </Modal>
    </>
  );
};

export default EditPage;
