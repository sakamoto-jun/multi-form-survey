import clsx from "clsx";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div
        className={clsx(
          "relative w-27 h-15 rounded-full bg-gray400",
          "before:absolute before:top-2 before:left-2 before:w-11 before:h-11 before:rounded-full before:bg-white",
          "peer-checked:bg-main before:peer-checked:translate-x-12",
          "transition-colors before:transition-transform"
        )}
      ></div>
    </label>
  );
};

export default Switch;
