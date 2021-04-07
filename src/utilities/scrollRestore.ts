import { useEffect } from "react";

const ScrollRestoration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    //eslint-disable-next-line
  }, []);

  return null;
};

export default ScrollRestoration;
