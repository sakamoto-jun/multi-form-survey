import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  opened: boolean;
}

const Modal = ({ children, opened }: PropsWithChildren<ModalProps>) => {
  return opened
    ? createPortal(
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black/30">
          <div className="z-20 w-full max-w-[655px] bg-white rounded-10">
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
