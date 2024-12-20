import type { SVGProps } from "react";
export const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-76.78 375.52-231.52H174.78q-41 0-69.5-28.5t-28.5-69.5v-455.7q0-41 28.5-69.5t69.5-28.5h610.44q41 0 69.5 28.5t28.5 69.5v455.7q0 41-28.5 69.5t-69.5 28.5H583.91L480-76.78Zm0-175.79 52.91-76.39h252.87v-456.82H174.22v456.82h252.87L480-252.57Zm0-305.08Z" />
  </svg>
);
