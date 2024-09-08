import type { SVGProps } from "react";
export const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h528l216 288-216 288H96Zm72-72h420l162-216-162-216H168v432Zm291-216Z" />
  </svg>
);
