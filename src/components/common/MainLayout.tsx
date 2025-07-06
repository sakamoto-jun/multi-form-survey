import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center h-full bg-bg">
      <main className="max-w-[655px] w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
