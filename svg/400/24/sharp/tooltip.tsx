import type { SVGProps } from "react";
export const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-80 373-240H80v-640h800v640H587L480-80Zm0-144 64-96h256v-480H160v480h256l64 96Zm0-336Z" />
  </svg>
);
