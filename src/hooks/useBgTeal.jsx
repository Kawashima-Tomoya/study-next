import { useEffect } from "react";

export const useBgTeal = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "teal";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
