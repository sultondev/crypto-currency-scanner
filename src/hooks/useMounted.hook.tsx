import { useEffect } from "react";

const useMounted = (callback: () => void) => {
  useEffect(callback, []);
};

export default useMounted;
