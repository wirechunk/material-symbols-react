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
    <path d="m440-803-83 83H240v117l-83 83 83 83v117h117l83 83 100-100 168 85-86-167 101-101-83-83v-117H523l-83-83Zm0-56.08 99.33 99.33h140.42v140.42L779.08-520 670.77-411.69l99.62 194.46-27.62 27.62-194.46-99.62L440-180.92l-99.33-99.33H200.25v-140.42L100.92-520l99.33-99.33v-140.42h140.42L440-859.08ZM440-520Z" />
  </svg>
);
