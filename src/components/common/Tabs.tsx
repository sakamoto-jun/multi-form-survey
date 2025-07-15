import clsx from "clsx";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const TabContext = createContext({
  currentTab: 0,
  setCurrentTab: (_: number) => {},
});

export default function Tabs({ children }: PropsWithChildren) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
}

export const TabList = ({ children }: PropsWithChildren) => {
  return <div className="flex justify-center gap-x-20">{children}</div>;
};

export const Tab = ({
  children,
  index,
}: PropsWithChildren<{ index: number }>) => {
  const { currentTab, setCurrentTab } = useContext(TabContext);

  return (
    <button
      className={clsx(
        "p-14 border-b-3",
        currentTab === index
          ? "text-main border-main"
          : "text-gray500 border-transparent"
      )}
      onClick={() => setCurrentTab(index)}
    >
      {children}
    </button>
  );
};

export const TabPanels = ({ children }: PropsWithChildren) => {
  return <div className="flex-1">{children}</div>;
};

export const TabPanel = ({
  children,
  index,
}: PropsWithChildren<{ index: number }>) => {
  const { currentTab } = useContext(TabContext);

  return <div hidden={currentTab !== index}>{children}</div>;
};
