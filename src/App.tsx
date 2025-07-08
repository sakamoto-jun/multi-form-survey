import "./App.css";
import Dropdown from "./components/common/Dropdown";
import MainLayout from "./components/common/MainLayout";
import Panel, {
  PanelBody,
  PanelCap,
  PanelFooter,
  PanelHeader,
} from "./components/common/Panel";
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/common/Tabs";

const App = () => {
  return (
    <MainLayout>
      <Tabs>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <PanelCap>Cap</PanelCap>
            <Panel>
              <PanelHeader>
                HEADER
                <Dropdown
                  options={[
                    { label: <div>1</div>, value: "1" },
                    { label: <div>2</div>, value: "2" },
                    { label: <div>3</div>, value: "3" },
                    { label: <div>4</div>, value: "4" },
                  ]}
                  onChange={(value) => console.log(value)}
                />
              </PanelHeader>
              <PanelBody>BODY</PanelBody>
              <PanelFooter>FOOTER</PanelFooter>
            </Panel>
          </TabPanel>
          <TabPanel index={1}>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
};

export default App;
