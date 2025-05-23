import type { SVGProps } from "react";
export const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm0-60h520v-680h-60v241q0 8-7.5 12.5t-15.5.5l-60-35q-7.1-4-14.55-4-7.45 0-14.45 4l-60 35q-8 4-15-.5t-7-12.5v-241H220v680Zm0 0v-680 680Zm266-439q0 8 7 12.5t15 .5l60-35q7.1-4 14.55-4 7.45 0 15.45 4l59 35q8 4 15.5-.5T680-579q0 9.39-7.5 13.7-7.5 4.3-15.5-.7l-60-34q-7.1-5-14.55-5-7.45 0-14.45 5l-60 34q-8 5-15 .7-7-4.31-7-13.7Z" />
  </svg>
);
