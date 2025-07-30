import { forwardRef, InputHTMLAttributes } from "react";
import CheckedRadioIcon from "../../assets/icons/radio_button_checked.svg?react";
import UncheckedRadioIcon from "../../assets/icons/radio_button_unchecked.svg?react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function RadioBase(
  { label, ...props }: RadioProps,
  ref
) {
  return (
    <label className="relative flex items-center">
      <input
        ref={ref}
        className="peer w-26 h-26 opacity-0"
        type="radio"
        {...props}
      />
      <CheckedRadioIcon className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" />
      <UncheckedRadioIcon className="absolute top-1/2 left-0 -translate-y-1/2 opacity-100 peer-checked:opacity-0 transition-opacity" />
      <span className="pl-14">{label}</span>
    </label>
  );
});

export default Radio;
