import type { SVGProps } from "react";
export const SvgScrollableHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-164v-632h632v632H164Zm52-52h528v-199.69H216V-216Zm0-251.69h528V-744H216v276.31Zm0 12V-744v288.31Z" />
  </svg>
);
