import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center h-screen bg-bg overflow-y-scroll">
      <main className="max-w-[655px] w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
