import type { SVGProps } from "react";
export const SvgNestDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-192q-95 0-167.5-13.5T240-237v-51h-72q-30 0-52-23.5T96-366l27-312q2-29 22.64-47.5T195-744h570q28.72 0 49.36 18.5T837-678l27 312q2 30-20 54t-52 24h-72v51q0 18.59-70.5 31.79Q579-192 480-192ZM168-360h624l-26.91-312H195l-27 312Zm312-156Z" />
  </svg>
);
