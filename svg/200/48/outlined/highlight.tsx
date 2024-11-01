import type { SVGProps } from "react";
export const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m256.54-642.69-73.46-73.23 22.23-21.46 73.23 73.46-22 21.23Zm208.08-81.93v-104.61h30.76v104.61h-30.76Zm238.84 83.16-22.23-22.23 73.69-73.23 22 22-73.46 73.46ZM400-120v-176.92l-120-120V-560h400v143.08l-120 120V-120H400Zm30.77-30.77h98.46v-159.61l120-120v-98.85H310.77v98.85l120 120v159.61ZM480-340Z" />
  </svg>
);
