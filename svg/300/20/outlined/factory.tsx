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
    <path d="M116-116v-422.54l224-103.07v83.23l192-84V-532h312v416H116Zm52-52h624v-312H480v-82l-192 84v-82l-120 55v337Zm280.62-81.23h62.76v-149.54h-62.76v149.54Zm-156 0h62.76v-149.54h-62.76v149.54Zm312 0h62.76v-149.54h-62.76v149.54ZM844-532H689.69l48-296.61h60.62L844-532ZM168-168h624-624Z" />
  </svg>
);
