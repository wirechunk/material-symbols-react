import type { SVGProps } from "react";
export const SvgViewAgenda = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-320h720v320H120Zm80-80h560v-160H200v160Zm-80-320v-320h720v320H120Zm80-80h560v-160H200v160Zm0 240v160-160Zm0-400v160-160Z" />
  </svg>
);
