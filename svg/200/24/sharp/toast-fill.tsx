import type { SVGProps } from "react";
export const SvgToastFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M260-260h440v-40H260v40ZM160-160v-640h640v640H160Z" />
  </svg>
);
