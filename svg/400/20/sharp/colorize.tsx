import type { SVGProps } from "react";
export const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-178l342-342-54-53 51-51 72 72 137-137 139 142-135 135 72 73-51 51-54-54-341 342H144Zm72-72h76l320-320-75-76-321 320v76Zm424-385 90-91-38-39-91 90 39 40Zm0 0-39-40 39 40Z" />
  </svg>
);
