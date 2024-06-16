import { useEffect, useCallback } from "react";

function EscHandler({ onEsc }) {
  const handlerKeydown = useCallback(
    (event) => {
      if (event.key === "Escape") onEsc();
    },
    [onEsc]
  );

  useEffect(() => {
    document.addEventListener("keydown", handlerKeydown);
    return () => {
      document.removeEventListener("keydown", handlerKeydown);
    };
  }, [handlerKeydown]);

  return null;
}

export default EscHandler;
