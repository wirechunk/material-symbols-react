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
    <path d="M480-60.78 364.52-231.52H60.78v-667.7h838.44v667.7H594.91L480-60.78Zm0-189.79 58.91-86.39h254.87v-456.82H166.22v456.82h254.87L480-250.57Zm0-315.08Z" />
  </svg>
);
