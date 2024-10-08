import type { SVGProps } from "react";
export const SvgStockpot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-624h672v336q0 40-28 68t-68 28H240q-40 0-68-28t-28-68v-336Zm72 72v264q0 10.2 6.9 17.1 6.9 6.9 17.1 6.9h480q10.2 0 17.1-6.9 6.9-6.9 6.9-17.1v-264H216Zm-72-120v-72h240v-48q0-10.2 6.9-17.1 6.9-6.9 17.1-6.9h144q10.2 0 17.1 6.9 6.9 6.9 6.9 17.1v48h240v72H144Zm336 264Z" />
  </svg>
);
