import type { SVGProps } from "react";
export const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-432h624v-72H168v72Zm0 360h624v-216H168v216Zm0 0v-432 432Z" />
  </svg>
);
