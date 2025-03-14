import type { SVGProps } from "react";
export const SvgViewCarousel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-280v-400h160v400H80Zm200 80v-560h400v560H280Zm440-80v-400h160v400H720Zm-360 0h240v-400H360v400Zm120-200Z" />
  </svg>
);
