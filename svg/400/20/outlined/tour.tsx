import type { SVGProps } from "react";
export const SvgTour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-768h72v96h552l-96 192 96 192H264v288h-72Zm72-600v240-240Zm216.21 192Q510-504 531-525.21t21-51Q552-606 530.79-627t-51-21Q450-648 429-626.79t-21 51Q408-546 429.21-525t51 21ZM264-456h435l-60-120 60-120H264v240Z" />
  </svg>
);
