import type { SVGProps } from "react";
export const SvgLineStartArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-240 96-480l384-240v204h384v72H480v204Zm-72-130v-220L232-480l176 110Zm0-110Z" />
  </svg>
);
