import { useEffect, useState } from "react";

export function useScroll() {
  const [atTop, setAtTop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 100) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    });
  });

  return atTop;
}
