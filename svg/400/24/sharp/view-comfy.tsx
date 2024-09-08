import type { SVGProps } from "react";
export const SvgViewComfy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm720-360v-200H160v200h640ZM400-240h400v-200H400v200Zm-240 0h160v-200H160v200Z" />
  </svg>
);
