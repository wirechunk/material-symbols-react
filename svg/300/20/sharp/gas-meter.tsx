import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M212-116v-655h158v-73h52v73h116v-73h52v73h158v655H212Zm52-52h432v-551H264v551Zm82-418h268v-52H346v52Zm134.43 308.54q32.95 0 58.88-24.75 25.92-24.74 25.92-59.79 0-27.23-17.95-49.72-17.96-22.5-67.28-78.82-49.08 56.31-67.15 78.64-18.08 22.33-18.08 49.78 0 35.18 26.36 59.92 26.36 24.74 59.3 24.74ZM264-168v-551 551Z" />
  </svg>
);
