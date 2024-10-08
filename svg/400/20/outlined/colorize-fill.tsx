import type { SVGProps } from "react";
export const SvgColorizeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-178l342-342-54-53 51-51 72 72 110.22-110.22q4.45-4.45 11.11-7.11Q683-816 691-816t15 2.5q7 2.5 12 7.5l87 88q4.55 5.83 7.27 12.64 2.73 6.8 2.73 14.58t-2.66 14.44q-2.67 6.66-7.11 11.1L696-556l72 73-51 51-54-54-341 342H144Zm72-68h76l320-320-75-76-321 320v76Z" />
  </svg>
);
