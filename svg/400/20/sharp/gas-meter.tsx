import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-695h168v-73h72v73h96v-73h72v73h168v695H192Zm72-72h432v-551H264v551Zm72-408h288v-72H336v72Zm144.5 312q37.5 0 66.5-27.63T576-359q0-31-20-56t-76-89q-56 64-76 89t-20 56.02q0 39.73 29.5 67.36Q443-264 480.5-264ZM264-168v-551 551Z" />
  </svg>
);
