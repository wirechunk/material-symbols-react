import type { SVGProps } from "react";
export const SvgUpgrade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-160v-60h400v60H280Zm170-170v-356L329-565l-42-42 193-193 193 193-42 42-121-121v356h-60Z" />
  </svg>
);
