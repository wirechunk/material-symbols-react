import type { SVGProps } from "react";
export const SvgSideNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm360-80h280v-560H480v560Z" />
  </svg>
);
