import type { SVGProps } from "react";
export const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M264.62-400v40H120v-480h480v144.62h-40V-800H160v400h104.62ZM360-120v-480h480v480H360Zm40-40h400v-400H400v400Zm200-200Z" />
  </svg>
);
