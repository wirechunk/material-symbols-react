import type { SVGProps } from "react";
export const SvgPanZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-192h72v69l117-117 51 51-117 117h69v72H144Zm483-432-51-51 117-117h-69v-72h192v192h-72v-69L627-576Z" />
  </svg>
);
