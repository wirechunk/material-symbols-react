import type { SVGProps } from "react";
export const SvgKeyVisualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-72h114v72H144Zm0-150v-72h300v72H144Zm0-150v-72h672v72H144Zm0-150v-72h300v72H144Zm0-150v-72h114v72H144Zm186 600v-72h114v72H330Zm0-600v-72h114v72H330Zm186 600v-72h114v72H516Zm0-150v-72h300v72H516Zm0-300v-72h300v72H516Zm0-150v-72h114v72H516Zm186 600v-72h114v72H702Zm0-600v-72h114v72H702Z" />
  </svg>
);
