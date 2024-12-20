import type { SVGProps } from "react";
export const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm293-320h347v-160H413v160Zm214 240h133v-160H627v160Zm-214 0h134v-160H413v160Zm-213 0h133v-400H200v400Z" />
  </svg>
);
