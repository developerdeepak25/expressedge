import { useRef } from "react";
import { useInView } from "framer-motion";

const useInViewOnce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return { ref, isInView };
};

export default useInViewOnce;
