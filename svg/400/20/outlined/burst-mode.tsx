import type { SVGProps } from "react";
export const SvgBurstMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-192v-576h72v576H48Zm144 0v-576h72v576h-72Zm216 0q-29.7 0-50.85-21.15Q336-234.3 336-264v-432q0-29.7 21.15-50.85Q378.3-768 408-768h432q29.7 0 50.85 21.15Q912-725.7 912-696v432q0 29.7-21.15 50.85Q869.7-192 840-192H408Zm0-72h432v-432H408v432Zm48-72h336L683-480l-83 108-59-78-85 114Zm-48 72v-432 432Z" />
  </svg>
);
