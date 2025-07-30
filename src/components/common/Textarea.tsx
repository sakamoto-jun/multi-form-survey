import clsx from "clsx";
import {
  forwardRef,
  TextareaHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function TextareaBase({ className, ...props }, ref) {
  const innerRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => innerRef.current!); // 외부 ref에 내부 ref 연결

  const resize = () => {
    const el = innerRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useEffect(() => {
    resize();
  }, []);

  return (
    <textarea
      ref={innerRef}
      rows={1}
      onInput={(e) => {
        resize();
        props.onInput?.(e);
      }}
      className={clsx(
        "py-17 pl-9 pr-21 border-b-1 border-b-gray200 outline-none break-words overflow-hidden resize-none",
        "focus:border-b-gray600 focus:bg-bg2 focus:rounded-t-6",
        className
      )}
      {...props}
    />
  );
});

export default Textarea;
