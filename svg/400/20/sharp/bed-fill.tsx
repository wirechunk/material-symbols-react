import type { SVGProps } from "react";
export const SvgBedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-240v-312h48v-168h672v168h48v312h-72v-72H168v72H96Zm420-312h228v-96H516v96Zm-300 0h228v-96H216v96Z" />
  </svg>
);
