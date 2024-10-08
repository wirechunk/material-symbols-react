import type { SVGProps } from "react";
export const SvgOverviewKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M40-200v-560h560v560H40Zm60-60h440v-440H100v440Zm600 60v-560h60v560h-60Zm160 0v-560h60v560h-60Zm-760-60v-440 440Z" />
  </svg>
);
