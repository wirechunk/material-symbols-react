import type { SVGProps } from "react";
export const SvgScrollableHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm60-60h600v-230H180v230Zm0-290h600v-310H180v310Zm0 0v-310 310Z" />
  </svg>
);
