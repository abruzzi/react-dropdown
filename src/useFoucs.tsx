import { useEffect, useRef } from "react";

const useFocus = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  return {
    ref,
  };
};

export default useFocus;
