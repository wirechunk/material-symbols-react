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
    <path d="M160-200v-400l129.23 96.92 198.46-279.23L666.15-640H800v440H160Zm160-80 160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z" />
  </svg>
);
