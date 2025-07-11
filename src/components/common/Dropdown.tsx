import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useState,
} from "react";
import ArrowDropdownIcon from "../../assets/icons/arrow_drop_down.svg?react";
import useOutsideClick from "../../hooks/common/useOutsideClick";

type DropdownOption<T> = {
  label: ReactNode;
  value: T;
};

interface DropdownContextType<T = unknown> {
  opened: boolean;
  open: () => void;
  close: () => void;
  options: DropdownOption<T>[];
  selected: number;
  onChange: (index: number) => void;
}

interface DropdownProps<T> {
  options: DropdownOption<T>[];
  placeholder?: string;
  onChange?: (value: T) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

export default function Dropdown<T>({
  placeholder,
  options,
  onChange,
}: DropdownProps<T>) {
  const [opened, setOpend] = useState(false);
  const [selected, setSelected] = useState(-1);

  const open = useCallback(() => setOpend(true), []);
  const close = useCallback(() => setOpend(false), []);

  const handleChange = useCallback(
    (index: number) => {
      setSelected(index);
      onChange?.(options[index].value);
      close();
    },
    [options, onChange, close]
  );

  return (
    <DropdownContext.Provider
      value={{
        opened,
        open,
        close,
        options,
        selected,
        onChange: handleChange,
      }}
    >
      <div className="relative inline-block">
        <DropdownButton placeholder={placeholder} />
        <DropdownMenu />
      </div>
    </DropdownContext.Provider>
  );
}

const DropdownButton = ({
  placeholder = "select",
}: {
  placeholder?: string;
}) => {
  const { open, options, selected } = useContext(DropdownContext)!;

  return (
    <button
      className="relative border border-gray300 rounded-10 min-w-197 p-14 pr-36 text-left"
      onClick={open}
    >
      {selected >= 0 ? options[selected].label : placeholder}
      <span className="absolute right-12 top-1/2 -translate-y-1/2">
        <ArrowDropdownIcon />
      </span>
    </button>
  );
};

const DropdownMenu = () => {
  const { opened, close, options, onChange } = useContext(DropdownContext)!;
  const containerRef = useOutsideClick(close);

  return opened ? (
    <div
      ref={containerRef as RefObject<HTMLDivElement>}
      className="flex flex-col absolute left-0 top-full min-w-197 mt-10 border border-gray300 rounded-10 bg-white"
    >
      {options.map((option, index) => (
        <DropdownMenuItem
          key={`${option.value}`}
          label={option.label}
          onSelect={() => onChange(index)}
        />
      ))}
    </div>
  ) : null;
};

const DropdownMenuItem = ({
  label,
  onSelect,
}: {
  label: ReactNode;
  onSelect: () => void;
}) => {
  return (
    <button
      className="p-14 border-t border-t-gray300 text-left first:border-none"
      onClick={onSelect}
    >
      {label}
    </button>
  );
};
