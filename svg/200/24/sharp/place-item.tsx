import type { SVGProps } from "react";
export const SvgPlaceItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-480h189.23v40H200v400h560v-400H610.77v-40H800v480H160Zm320-187.69L347.69-480 376-508.31l84 83.77V-900h40v475.46l84-83.77L612.31-480 480-347.69Z" />
  </svg>
);
