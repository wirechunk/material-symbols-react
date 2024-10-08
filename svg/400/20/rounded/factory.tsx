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
    <path d="M168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-338q0-21.08 11.14-38.65Q118.29-562.22 138-571l171-78q18.21-8 34.61 2.42Q360-636.17 360-616v28l142-62q18.18-8 34.09 2.5Q552-637 552-617v65h312v384q0 29.7-21.15 50.85Q821.7-96 792-96H168Zm0-72h624v-312H480v-82l-192 84v-82l-120 55v337Zm276-72h72v-168h-72v168Zm-156 0h72v-168h-72v168Zm312 0h72v-168h-72v168Zm264-312H672l43-281q2-14 12.11-22.5T751-864h34q13.78 0 23.89 8.5Q819-847 821-833l43 281ZM168-168h624-624Z" />
  </svg>
);
