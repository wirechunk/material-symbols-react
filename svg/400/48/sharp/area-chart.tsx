import type { SVGProps } from "react";
export const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-520l160 120 200-280 200 160h160v520H120Zm204-91 160-221 296 231v-379H659L492-754 294-475l-114-85v194l144 115Z" />
  </svg>
);
