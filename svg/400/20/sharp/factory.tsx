import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-456l264-120v84l192-84v120h312v456H96Zm72-72h624v-312H480v-82l-192 84v-82l-120 55v337Zm276-72h72v-168h-72v168Zm-156 0h72v-168h-72v168Zm312 0h72v-168h-72v168Zm264-312H672l48-312h96l48 312ZM168-168h624-624Z" />
  </svg>
);
