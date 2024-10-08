import type { SVGProps } from "react";
export const SvgSegmentFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M384-240v-72h432v72H384Zm0-204v-72h432v72H384ZM144-648v-72h672v72H144Z" />
  </svg>
);
