import type { SVGProps } from "react";
export const SvgDesktopPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M440-240h200v-360H440v360ZM320-360h60v-300h140v-60H320v360ZM800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Z" />
  </svg>
);
