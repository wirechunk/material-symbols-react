import type { SVGProps } from "react";
export const SvgIronFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-240v-120q0-66 47-113t113-47h360v-80H360v40h-80v-120h400v280h40v-320h160v80h-80v320H680v80H80Z" />
  </svg>
);
