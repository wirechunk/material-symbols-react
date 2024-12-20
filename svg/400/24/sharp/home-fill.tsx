import type { SVGProps } from "react";
export const SvgHomeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
  </svg>
);
