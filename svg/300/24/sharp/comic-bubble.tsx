import type { SVGProps } from "react";
export const SvgComicBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m440-803-83 83H240v117l-83 83 83 83v117h117l83 83 100-100 168 85-86-167 101-101-83-83v-117H523l-83-83Zm0-84.54 107.66 107.67h152.21v152.21L807.54-520 695.38-407.85l107.31 210.23-40.31 40.31-210.23-107.31L440-152.46 332.34-260.13H180.13v-152.21L72.46-520l107.67-107.66v-152.21h152.21L440-887.54ZM440-520Z" />
  </svg>
);
