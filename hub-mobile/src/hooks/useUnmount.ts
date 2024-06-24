import { useEffect } from "react";
import useLatest from "./useLatest";

const useUnmount = (fn: () => void) => {
  const refFn = useLatest(fn);
  useEffect(() => () => refFn.current(), []);
};

export default useUnmount;
