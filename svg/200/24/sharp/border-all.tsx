import type { SVGProps } from "react";
export const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm600-40v-260H500v260h260Zm0-560H500v260h260v-260Zm-560 0v260h260v-260H200Zm0 560h260v-260H200v260Z" />
  </svg>
);
