import type { SVGProps } from "react";
export const SvgFullscreenPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-240h320v-480H320v480ZM800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Z" />
  </svg>
);
