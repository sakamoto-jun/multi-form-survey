import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-28 py-10 border rounded-10 text-16 font-medium",
        classes[variant],
        className
      )}
      {...props}
    />
  );
};

const classes: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-main border-main text-white",
  secondary: "bg-white border-main text-main",
  tertiary: "bg-transparent border-transparent text-gray700",
};

export default Button;
