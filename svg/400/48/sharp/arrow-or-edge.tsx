import type { SVGProps } from "react";
export const SvgArrowOrEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M300-120 154-266l42-43 74 74v-285H40v-320h60v260h230v345l74-73 42 42-146 146Zm359 0L513-266l42-43 74 74v-345h231v-260h60v320H689v285l74-73 42 42-146 146Z" />
  </svg>
);
