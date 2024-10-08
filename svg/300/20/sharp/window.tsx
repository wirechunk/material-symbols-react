import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M796-164H164v-632h632v632ZM506-454v238h238v-238H506Zm0-52h238v-238H506v238Zm-52 0v-238H216v238h238Zm0 52H216v238h238v-238Z" />
  </svg>
);
