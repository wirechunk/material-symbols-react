import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-50v-60h320v60H320Zm340-210v-600H301v600h359ZM479-720q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9ZM301-860v600-600Zm-60 660v-720h479v166h32v141h-32v413H241Z" />
  </svg>
);
