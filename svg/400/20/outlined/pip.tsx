import type { SVGProps } from "react";
export const SvgPip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-480v-72h165L71-743l50-50 191 190v-165h72v288H96Zm72 288q-29.7 0-50.85-21.15Q96-234.3 96-264v-144h72v144h336v72H168Zm624-264v-240H456v-72h336q29.7 0 50.85 21.15Q864-725.7 864-696v240h-72ZM576-192v-192h288v192H576Z" />
  </svg>
);
