import type { SVGProps } from "react";
export const SvgChessFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-80v-240h132l24-170H170v-60h620v60H684l24 170h132v240H120Zm140-530-60-270q31 30 68 46.5t75 16.5q37 0 71.5-16t65.5-47q31 31 65.5 47t71.5 16q37 0 74.5-16.5T760-880l-60 270H260Z" />
  </svg>
);
