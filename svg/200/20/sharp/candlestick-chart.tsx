import type { SVGProps } from "react";
export const SvgCandlestickChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M316-184v-96h-84v-400h84v-96h32v96h84v400h-84v96h-32Zm-52-128h136v-336H264v336Zm348 128v-176.62h-84v-231.07h84V-776h32v184.31h84v231.07h-84V-184h-32Zm-52-208.62h136v-167.07H560v167.07ZM332-480Zm296 3.85Z" />
  </svg>
);
