import type { SVGProps } from "react";
export const SvgLooksOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-280h80v-400H400v80h80v320Zm360 160H120v-720h720v720Zm-640-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
);
