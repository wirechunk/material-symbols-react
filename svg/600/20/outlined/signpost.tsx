import type { SVGProps } from "react";
export const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M431-76.78v-178.44H233.78l-109-121 109-121H431v-72H172.78v-242H431v-72h98v72h197.22l109 121-109 121H529v72h258.22v242H529v178.44h-98ZM262.3-658.74h425.13l27.48-31.48-27.48-32.04H262.3v63.52Zm10.27 314.57H697.7v-63.52H272.57l-27.48 31.47 27.48 32.05ZM262.3-658.74v-63.52 63.52Zm435.4 314.57v-63.52 63.52Z" />
  </svg>
);
