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
    <path d="M816-144H144v-672h672v672ZM516-444v228h228v-228H516Zm0-72h228v-228H516v228Zm-72 0v-228H216v228h228Zm0 72H216v228h228v-228Z" />
  </svg>
);
