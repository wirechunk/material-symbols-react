import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M222.78-597.43v374.65h514.44v-374.65H634.17v289.13L480-385.39 325.83-308.3v-289.13H222.78Zm-98 472.65v-584.48l123.13-126.52h464.18l123.13 126.52v584.48H124.78Zm117-565h476.44l-48-48H289.78l-48 48Zm176.39 92.35v139.34L480-489l61.83 30.91v-139.34H418.17Zm-195.39 0H737.22 222.78Z" />
  </svg>
);
