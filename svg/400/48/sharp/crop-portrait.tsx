import type { SVGProps } from "react";
export const SvgCropPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-80v-800h640v800H160Zm60-60h520v-680H220v680Zm0 0v-680 680Z" />
  </svg>
);
