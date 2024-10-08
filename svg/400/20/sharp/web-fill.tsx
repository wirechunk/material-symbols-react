import type { SVGProps } from "react";
export const SvgWebFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h408v-120H168v120Zm480 0h144v-312H648v312ZM168-456h408v-120H168v120Z" />
  </svg>
);
