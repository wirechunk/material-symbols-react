import type { SVGProps } from "react";
export const SvgUpgrade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-160v-80h400v80H280Zm160-160v-327L336-544l-56-56 200-200 200 200-56 56-104-103v327h-80Z" />
  </svg>
);
