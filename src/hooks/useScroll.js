import React from "react";

export const useScroll = () => {
  const refScroll = React.useRef(null);

  const onScrollRight = () => {
    if (refScroll.current) {
      refScroll.current.scrollBy({
        left: refScroll.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const onScrollLeft = () => {
    if (refScroll.current) {
      refScroll.current.scrollBy({
        left: -refScroll.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return { refScroll, onScrollRight, onScrollLeft };
};
