import type { SVGProps } from "react";
export const SvgDesk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-276v-372q0-29.7 21.15-50.85Q138.3-720 168-720h624q29.7 0 50.85 21.15Q864-677.7 864-648v372q0 15.3-10.29 25.65Q843.42-240 828.21-240t-25.58-10.35Q792.26-260.7 792.26-276v-36H648v36q0 15.3-10.29 25.65Q627.42-240 612.21-240t-25.71-10.35Q576-260.7 576-276v-372H168v372q0 15.3-10.29 25.65Q147.42-240 132.21-240t-25.71-10.35Q96-260.7 96-276Zm552-276h144v-96H648v96Zm0 168h144v-96H648v96Z" />
  </svg>
);
