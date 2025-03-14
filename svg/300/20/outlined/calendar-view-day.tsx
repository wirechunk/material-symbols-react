import type { SVGProps } from "react";
export const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M228.31-308Q202-308 183-327q-19-19-19-45.31v-215.38Q164-614 183-633q19-19 45.31-19h503.38q27.01 0 45.66 19Q796-614 796-587.69v215.38Q796-346 777.35-327q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-215.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v215.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM164-731.69v-52h632v52H164Zm0 555.38v-52h632v52H164ZM216-600v240-240Z" />
  </svg>
);
