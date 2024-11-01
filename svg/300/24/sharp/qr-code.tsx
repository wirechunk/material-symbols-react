import type { SVGProps } from "react";
export const SvgQrCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-520v-300h300v300H140Zm60-60h180v-180H200v180Zm-60 440v-300h300v300H140Zm60-60h180v-180H200v180Zm320-320v-300h300v300H520Zm60-60h180v-180H580v180Zm165 440v-75h75v75h-75ZM520-365v-75h75v75h-75Zm75 75v-75h75v75h-75Zm-75 75v-75h75v75h-75Zm75 75v-75h75v75h-75Zm75-75v-75h75v75h-75Zm0-150v-75h75v75h-75Zm75 75v-75h75v75h-75Z" />
  </svg>
);
