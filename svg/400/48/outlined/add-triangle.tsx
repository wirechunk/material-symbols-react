import type { SVGProps } from "react";
export const SvgAddTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm306-66h60v-83h84v-60h-84v-84h-60v84h-84v60h84v83Zm30-113Z" />
  </svg>
);
