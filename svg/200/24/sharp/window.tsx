import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M800-160H160v-640h640v640ZM500-460v260h260v-260H500Zm0-40h260v-260H500v260Zm-40 0v-260H200v260h260Zm0 40H200v260h260v-260Z" />
  </svg>
);
