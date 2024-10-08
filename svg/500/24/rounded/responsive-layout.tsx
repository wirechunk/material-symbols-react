import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M110.2-202.87v-354.26q0-37.78 26.6-64.39 26.61-26.61 64.4-26.61h112.58v-112.59q0-37.78 26.61-64.39t64.39-26.61H758.8q37.79 0 64.4 26.61 26.6 26.61 26.6 64.39v557.85q0 37.78-26.6 64.39-26.61 26.61-64.4 26.61H201.2q-37.79 0-64.4-26.61-26.6-26.61-26.6-64.39Zm536.02 0H758.8v-557.85H404.78v112.59h150.44q37.78 0 64.39 26.61t26.61 64.39v354.26Zm-241.44 0h150.44v-354.26H404.78v354.26Zm-203.58 0h112.58v-354.26H201.2v354.26Z" />
  </svg>
);
