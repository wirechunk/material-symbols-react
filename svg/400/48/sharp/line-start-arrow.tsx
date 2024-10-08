import type { SVGProps } from "react";
export const SvgLineStartArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M520-200 80-480l440-280v250h360v60H520v250Zm-60-109v-342L192-480l268 171Zm0-171Z" />
  </svg>
);
