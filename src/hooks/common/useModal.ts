import { useState } from "react";

export default function useModal(initial: boolean = false) {
  const [opened, setOpened] = useState(initial);

  const open = () => setOpened(true);
  const close = () => setOpened(false);

  return { opened, open, close };
}
