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
    <path d="M218.87-279.87q-33.78 0-58.39-24.61t-24.61-58.39v-234.26q0-33.78 24.61-58.39t58.39-24.61h522.26q34.48 0 58.74 24.61 24.26 24.61 24.26 58.39v234.26q0 33.78-24.26 58.39t-58.74 24.61H218.87Zm0-83h522.26v-234.26H218.87v234.26Zm-83-385.43v-83h688.26v83H135.87Zm0 619.6v-83h688.26v83H135.87Zm83-468.43v234.26-234.26Z" />
  </svg>
);
