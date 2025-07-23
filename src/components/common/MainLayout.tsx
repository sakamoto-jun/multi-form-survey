import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center min-h-screen py-60 bg-bg overflow-y-auto">
      <main className="relative w-full max-w-[655px]">{children}</main>
    </div>
  );
};

export default MainLayout;
