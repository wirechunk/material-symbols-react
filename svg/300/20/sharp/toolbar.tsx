import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-164v-632h632v632H164Zm52-484h528v-96H216v96Zm528 52H216v380h528v-380Zm-528-52v52-52Zm0 0v-96 96Zm0 52v380-380Z" />
  </svg>
);
