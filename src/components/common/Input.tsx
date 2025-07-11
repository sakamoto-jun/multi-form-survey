import cn from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        "py-17 pl-9 pr-21 border-b-1 border-b-gray200 outline-none",
        "focus:border-b-gray600 focus:bg-bg2 focus:rounded-t-6",
        className
      )}
      {...props}
    />
  );
});

export default Input;
