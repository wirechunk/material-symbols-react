import type { SVGProps } from "react";
export const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216q-29.7 0-50.85-21.15Q144-186.3 144-216Zm372-228v228h228v-228H516Zm0-72h228v-228H516v228Zm-72 0v-228H216v228h228Zm0 72H216v228h228v-228Z" />
  </svg>
);
