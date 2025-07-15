import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function InputBase({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={clsx(
        "py-17 pl-9 pr-21 border-b-1 border-b-gray200 outline-none",
        "focus:border-b-gray600 focus:bg-bg2 focus:rounded-t-6",
        className
      )}
      {...props}
    />
  );
});

export default Input;
