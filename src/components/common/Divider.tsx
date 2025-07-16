import clsx from "clsx";

type DividerProps = {
  direction?: "horizontal" | "vertical";
};

const Divider = ({ className, direction = "horizontal" }: Cn<DividerProps>) => {
  if (direction === "horizontal") {
    return <hr className={clsx("w-full border-t border-gray100", className)} />;
  }
  return <div className={clsx("h-full w-1 border-0 bg-gray100", className)} />;
};

export default Divider;
