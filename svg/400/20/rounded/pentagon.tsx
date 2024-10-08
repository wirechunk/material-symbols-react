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
    <path d="M306-168h349l123-355.69L480-729 182-524l124 356Zm-1 72q-22.94 0-41.47-13Q245-122 237-144L114-500q-8-23-.63-46.08Q120.74-569.15 141-583l298-205q18.63-13 40.82-13Q502-801 521-788l298 205q20.26 13.85 27.63 36.92Q854-523 846-500L723-144q-8 22-26.53 35T655-96H305Zm175-353Z" />
  </svg>
);
