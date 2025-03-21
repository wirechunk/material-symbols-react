import type { SVGProps } from "react";
export const SvgCapture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm120-90h440q12.75 0 21.38-8.63Q730-327.25 730-340v-280q0-12.75-8.62-21.38Q712.75-650 700-650H260q-12.75 0-21.37 8.62Q230-632.75 230-620v280q0 12.75 8.63 21.37Q247.25-310 260-310Zm-120 90v-520 520Z" />
  </svg>
);
