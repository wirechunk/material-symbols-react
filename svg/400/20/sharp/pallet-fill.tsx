import type { SVGProps } from "react";
export const SvgPalletFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-144h768v144h-96v-72H528v72h-96v-72H192v72H96Zm120-240v-528h528v528H216Zm144-312h240v-72H360v72Z" />
  </svg>
);
