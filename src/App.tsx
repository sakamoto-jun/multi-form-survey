import "./App.css";
import MainLayout from "./components/common/MainLayout";
import { PanelCap } from "./components/common/Panel";
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/common/Tabs";
import QuestionEditor from "./components/edit/QuestionEditor";

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
            <QuestionEditor />
          </TabPanel>
          <TabPanel index={1}>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
};

export default App;
