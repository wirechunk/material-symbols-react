import type { SVGProps } from "react";
export const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M436.41-76.41V-600h-371L480-892.44 894.59-600h-371v523.59h-87.18Zm43.59-611h139.3-278.6H480Zm-374.59 611v-213.11L72.7-468.87l85.17-15.43 30 160.71h168.54v247.18H269v-160h-76.41v160h-87.18Zm498.18 0v-247.18h168.54l30-160.71 85.17 15.43-32.71 179.35v213.11h-87.18v-160H691v160h-87.41Zm-262.89-611h278.6L480-785.35l-139.3 97.94Z" />
  </svg>
);
