import type { SVGProps } from "react";
export const SvgBorderAllFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M506-164v-290h290v290H506Zm0-342v-290h290v290H506Zm-342 0v-290h290v290H164Zm0 342v-290h290v290H164Z" />
  </svg>
);
