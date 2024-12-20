import type { SVGProps } from "react";
export const SvgThumbUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-144v-480l288-288 71 49-47 239h336v143L768-144H264Zm72-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378ZM48-144v-480h216v72H120v336h144v72H48Z" />
  </svg>
);
