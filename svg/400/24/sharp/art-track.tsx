import type { SVGProps } from "react";
export const SvgArtTrack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M600-200H40v-560h560v560Zm-480-80h400v-400H120v400Zm560 80v-560h80v560h-80Zm160 0v-560h80v560h-80ZM160-360h320L376-500l-76 100-56-74-84 114Zm-40-320v400-400Z" />
  </svg>
);
