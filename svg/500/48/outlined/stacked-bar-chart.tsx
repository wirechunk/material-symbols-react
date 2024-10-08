import type { SVGProps } from "react";
export const SvgStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M154.02-154.02v-476.46h145.26v476.46H154.02Zm0-506.7v-145.5h145.26v145.5H154.02Zm253.35 506.7v-355.74h145.26v355.74H407.37Zm0-385.98v-145.5h145.26V-540H407.37Zm253.35 385.98v-235.26h145.5v235.26h-145.5Zm0-265.5v-145.26h145.5v145.26h-145.5Z" />
  </svg>
);
