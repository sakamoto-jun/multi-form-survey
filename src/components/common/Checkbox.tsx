import { forwardRef, InputHTMLAttributes } from "react";
import CheckedCheckboxIcon from "../../assets/icons/check_box.svg?react";
import UncheckedCheckboxIcon from "../../assets/icons/check_box_outline_blank.svg?react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckboxBase({ label, ...props }: CheckboxProps, ref) {
    return (
      <label className="relative flex items-center">
        <input
          ref={ref}
          className="peer w-26 h-26 opacity-0"
          type="checkbox"
          {...props}
        />
        <CheckedCheckboxIcon className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" />
        <UncheckedCheckboxIcon className="absolute top-1/2 left-0 -translate-y-1/2 opacity-100 peer-checked:opacity-0 transition-opacity" />
        <span className="pl-14">{label}</span>
      </label>
    );
  }
);

export default Checkbox;
