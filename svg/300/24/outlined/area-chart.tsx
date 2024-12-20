import type { SVGProps } from "react";
export const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-180v-460l144.62 108.46 199.23-279.61L673.08-660H820v480H140Zm180-100 160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z" />
  </svg>
);
