import type { SVGProps } from "react";
export const SvgGateFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216v-384q0-60 42-102t102-42h84v228h-60v72h60v228H216Zm300 0v-228h60v-72h-60v-228h84q60 0 102 42t42 102v384H516ZM96-288v-384h72v384H96Zm696 0v-384h72v384h-72Z" />
  </svg>
);
