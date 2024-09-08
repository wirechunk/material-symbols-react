import type { SVGProps } from "react";
export const SvgSmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m392-313 260-169-260-169v338ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z" />
  </svg>
);
