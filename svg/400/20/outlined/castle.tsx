import type { SVGProps } from "react";
export const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-144v-480h72v96h72v-336h72v96h96v-96h72v96h96v-96h72v96h96v-96h72v336h72v-96h72v480H576v-96q0-39.6-28.2-67.8Q519.6-336 480-336q-39.6 0-67.8 28.2Q384-279.6 384-240v96H48Zm72-72h192v-24q0-70 49-119t119-49q70 0 119 49t49 119v24h192v-240H696v-240H264v240H120v240Zm240-264h72v-144h-72v144Zm168 0h72v-144h-72v144Zm-48 15Z" />
  </svg>
);
