import type { SVGProps } from "react";
export const SvgEjectFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-72h480v72H240Zm16-144 224-336 224 336H256Z" />
  </svg>
);
