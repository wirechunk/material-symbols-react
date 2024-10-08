import type { SVGProps } from "react";
export const SvgDetails = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m96-144 384-672 384 672H96Zm124-72h224v-392L220-216Zm296 0h224L516-608v392Z" />
  </svg>
);
