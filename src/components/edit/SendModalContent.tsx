import CloseIcon from "../../assets/icons/close.svg?react";
import callApi from "../../utils/api";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import Panel, { PanelBody, PanelFooter, PanelHeader } from "../common/Panel";

interface SendModalContentProps {
  surveyId: number;
  emailCollected: boolean;
  onClose: () => void;
}

const SendModalContent = ({
  surveyId,
  emailCollected,
  onClose,
}: SendModalContentProps) => {
  const path = `${location.host}/surveys/${surveyId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(path);
    onClose();
  };
  const handleChangeEmailCollected = (value: boolean) => {
    callApi(`/surveys/${surveyId}`, {
      method: "PATCH",
      body: { emailCollected: value },
    });
  };

  return (
    <Panel className="text-gray900">
      <PanelHeader className="flex justify-between items-center mb-20">
        <h4 className="text-20 font-semibold">설문지 보내기</h4>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </PanelHeader>
      <PanelBody>
        <div className="flex justify-between items-center -mx-20 mb-38 px-20 py-13 bg-bg">
          <span className="text-16 font-medium">이메일 주소 수집</span>
          <Dropdown<boolean>
            defaultValue={emailCollected}
            options={[
              { label: "수집하지 않음", value: false },
              { label: "수집함", value: true },
            ]}
            onChange={handleChangeEmailCollected}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-17 font-semibold">링크</span>
          <p className="pt-21 pb-16 text-16 text-gray800 font-medium">{path}</p>
        </div>
      </PanelBody>
      <PanelFooter className="flex justify-end items-center mt-26">
        <Button variant="tertiary" onClick={onClose}>
          취소
        </Button>
        <Button variant="secondary" onClick={handleCopy}>
          복사
        </Button>
      </PanelFooter>
    </Panel>
  );
};

export default SendModalContent;
