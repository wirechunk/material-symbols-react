import type { SVGProps } from "react";
export const SvgOpacity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-144q-125 0-212.5-86.5T180-440q0-60 22.5-112.5T264-645l216-219 217 220q38 40 60.5 92T780-440q0 123-87.5 209.5T480-144ZM253-432h454q0-48-13.5-87T646-593L480-761 315-594q-35 35-48.5 74.5T253-432Z" />
  </svg>
);
