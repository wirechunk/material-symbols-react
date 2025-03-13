import type { SVGProps } from "react";
export const SvgDataArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M576-192v-72h120v-432H576v-72h192v576H576Zm-384 0v-576h192v72H264v432h120v72H192Z" />
  </svg>
);
