import type { SVGProps } from "react";
export const SvgFoundation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M210.26-135.87v-121.2h-96v-83h96v-172.69l-83.69 64.89-50.46-66.85L480-824.37l404.13 309.65-50.46 66.85L749.74-513v172.93h96.24v83h-96.24v121.2h-83v-121.2H521.26v121.2H438.5v-121.2H293.26v121.2h-83Zm83-204.2H438.5V-688.2L293.26-576.85v236.78Zm228 0h145.48v-236.78L521.26-688.43v348.36Z" />
  </svg>
);
