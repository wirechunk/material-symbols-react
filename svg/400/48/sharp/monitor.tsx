import type { SVGProps } from "react";
export const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M260-120v-73l47-47H80v-600h800v600H652l48 47v73H260ZM140-300h680v-480H140v480Zm0 0v-480 480Z" />
  </svg>
);
