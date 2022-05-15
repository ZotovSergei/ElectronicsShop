import { useCallback, useState } from "react";

const useOpen = (inittialProps = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(inittialProps);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    toggle,
  };
};
export default useOpen;
