import { useLenis } from "@studio-freight/react-lenis";
import    { useEffect} from "react";

const ScrollToTop = () => {
  // const locaton = useLocation();
  const lenis = useLenis();
  

  useEffect(() => {
    console.log('i am here');
   
    // lenis?.scrollTo(0);
      document.documentElement.scrollTop = 0;
  }, [lenis]);
  return null;
};

export default ScrollToTop;
