import type { SVGProps } from "react";
export const SvgLocalBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-144v-72h204v-161L144-720v-96h672v96L516-377v161h204v72H240Zm42-528h396l63-72H219l63 72Zm198 226 135-154H345l135 154Zm0 0Z" />
  </svg>
);
