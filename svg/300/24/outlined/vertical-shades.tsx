import type { SVGProps } from "react";
export const SvgVerticalShades = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-140v-60h80v-620h600v620h80v60H100Zm140-60h95v-560h-95v560Zm155 0h170v-560H395v560Zm230 0h95v-560h-95v560Zm-385 0v-560 560Zm480 0v-560 560Z" />
  </svg>
);
