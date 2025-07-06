import "./App.css";
import MainLayout from "./components/common/MainLayout";
import Panel, {
  PanelBody,
  PanelCap,
  PanelFooter,
  PanelHeader,
} from "./components/common/Panel";
import TabProvider, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/common/Tabs";

const App = () => {
  return (
    <MainLayout>
      <TabProvider>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <PanelCap>Cap</PanelCap>
            <Panel>
              <PanelHeader>HEADER</PanelHeader>
              <PanelBody>BODY</PanelBody>
              <PanelFooter>FOOTER</PanelFooter>
            </Panel>
          </TabPanel>
          <TabPanel index={1}>Panel 2</TabPanel>
        </TabPanels>
      </TabProvider>
    </MainLayout>
  );
};

export default App;
