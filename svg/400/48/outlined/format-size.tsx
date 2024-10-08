import type { SVGProps } from "react";
export const SvgFormatSize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M570-160v-540H360v-100h520v100H670v540H570Zm-360 0v-340H80v-100h360v100H310v340H210Z" />
  </svg>
);
