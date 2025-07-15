import { observer } from "mobx-react-lite";
import Section from "../../models/section";
import Input from "../common/Input";
import Panel, { PanelBody, PanelCap } from "../common/Panel";

interface SectionTitleEditorProps {
  capTitle: string;
  section: Section;
}

const SectionTitleEditorBase = ({
  capTitle,
  section,
}: SectionTitleEditorProps) => {
  return (
    <div>
      <PanelCap>{capTitle}</PanelCap>
      <Panel>
        <PanelBody className="flex flex-col">
          <Input
            className="py-8 mb-17 text-24 text-gray900 font-semibold"
            value={section.title}
            onChange={(e) => section.setTitle(e.target.value)}
          />
          <Input
            className="py-3 text-16 text-gray700"
            value={section.description}
            onChange={(e) => section.setDescription(e.target.value)}
          />
        </PanelBody>
      </Panel>
    </div>
  );
};

const SectionTitleEditor = observer(SectionTitleEditorBase);

export default SectionTitleEditor;
