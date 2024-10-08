import type { SVGProps } from "react";
export const SvgAddTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m48-144 432-720 432 720H48Zm127-72h610L480-724 175-216Zm269-48h72v-84h84v-72h-84v-84h-72v84h-84v72h84v84Zm36-120Z" />
  </svg>
);
