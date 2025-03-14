import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm30.77-30.77h658.46v-498.46H150.77v498.46ZM298.54-320h369.31L556.23-470.54 446.77-331.92l-71.23-88.23-77 100.15Zm-147.77 89.23v-498.46 498.46Z" />
  </svg>
);
