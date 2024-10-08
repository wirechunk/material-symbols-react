import type { SVGProps } from "react";
export const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M306-168h349l123-356-298-205-298 205 124 356Zm-52 72L96-552l384-264 384 264L706-96H254Zm226-353Z" />
  </svg>
);
