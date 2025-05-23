import type { SVGProps } from "react";
export const SvgViewKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M298-298h52v-364h-52v364Zm156-192h52v-172h-52v172Zm156 96h52v-268h-52v268ZM164-164v-632h632v632H164Zm52-52h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
