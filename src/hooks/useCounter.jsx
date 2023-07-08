import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevcount) => prevcount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
    // isShow ? false : true);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
