import cn from "classnames";
import { PropsWithChildren } from "react";

export default function Panel({ children, className }: PropsWithChildren<Cn>) {
  return (
    <div
      className={cn(
        "flex flex-col p-20 pt-26 bg-white rounded-10 mb-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export const PanelHeader = ({ children, className }: PropsWithChildren<Cn>) => {
  return <div className={className}>{children}</div>;
};

export const PanelBody = ({ children, className }: PropsWithChildren<Cn>) => {
  return <div className={className}>{children}</div>;
};

export const PanelFooter = ({ children, className }: PropsWithChildren<Cn>) => {
  return (
    <>
      <hr className="border-gray100 mb-20" />
      <div className={className}>{children}</div>
    </>
  );
};

export const PanelCap = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative -mb-10 z-10">
      <div className="inline-block px-14 pt-10 pb-6 bg-main rounded-t-10 text-15 text-white">
        {children}
      </div>
      <div className="h-9 bg-main" />
    </div>
  );
};
