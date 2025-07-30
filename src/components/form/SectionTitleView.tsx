import Section from "../../models/section";
import Panel, { PanelBody, PanelCap } from "../common/Panel";

interface SectionTitleViewProps {
  section: Section;
}

const SectionTitleView = ({ section }: SectionTitleViewProps) => {
  return (
    <div>
      <PanelCap />
      <Panel>
        <PanelBody className="flex flex-col">
          <h4 className="mb-17 text-24 text-gray900 font-semibold">
            {section.title}
          </h4>
          <p className="text-16 text-gray700">{section.description}</p>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default SectionTitleView;
