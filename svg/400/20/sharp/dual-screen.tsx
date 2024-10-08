import type { SVGProps } from "react";
export const SvgDualScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m264-264 240 96v-528l-240-96v528Zm-72 49v-649h72l312 118v685L192-215Zm312-25v-72h192v-480H264v-72h504v624H504Zm-240-24v-528 528Z" />
  </svg>
);
