import type { SVGProps } from "react";
export const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-144v-672h336l24 96h216v384H528l-24-96H264v288h-72Zm300-431Zm92 167h112v-240H496l-24-96H264v240h296l24 96Z" />
  </svg>
);
