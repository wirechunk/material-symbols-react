import type { SVGProps } from "react";
export const SvgShift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-144v-278H144l336-442 336 442H624v278H336Zm72-72h144v-278h117L480-747 291-494h117v278Zm72-278Z" />
  </svg>
);
