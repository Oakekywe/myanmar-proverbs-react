import { useEffect } from "react";

const ScrollToBot = () => {
  useEffect(() => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  }, []);

  return null;
};

export default ScrollToBot;
