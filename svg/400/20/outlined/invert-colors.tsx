import type { SVGProps } from "react";
export const SvgInvertColors = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-144q-125 0-212.5-86.5T180-440q0-60 22.5-112.5T264-645l216-219 217 220q38 40 60.5 92T780-440q0 123-87.5 209.5T480-144Zm0-72v-545L315-594q-31 32-47 71t-16 83q0 93 66.5 158.5T480-216Z" />
  </svg>
);
