import type { SVGProps } from "react";
export const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M464-116v-480H159.08L480-839.38 800.92-596H496v480h-32Zm16-512h231.08-462.16H480ZM164-116v-160.92L132.08-424l31.54-8.31 27.46 136.93H340V-116h-32v-147.38H196V-116h-32Zm456 0v-179.38h147.92l28.46-136.93 31.54 8.31L796-276.92V-116h-32v-147.38H652V-116h-32ZM248.92-628h462.16L480-798.62 248.92-628Z" />
  </svg>
);
