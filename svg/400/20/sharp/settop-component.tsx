import type { SVGProps } from "react";
export const SvgSettopComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-288v-384h768v384H96Zm72-72h624v-240H168v240Zm48-84h264v-72H216v72Zm336 0h72v-72h-72v72Zm120 0h72v-72h-72v72Zm-504 84v-240 240Z" />
  </svg>
);
