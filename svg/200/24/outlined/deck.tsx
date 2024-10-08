import type { SVGProps } from "react";
export const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M460-100v-520H143.08L480-855.38 816.92-620H500v520h-40Zm20-560h209.08-418.16H480ZM140-100v-206.92L111.08-466l39.54-6.31 28.46 156.93H340V-100h-40v-175.38H180V-100h-40Zm480 0v-215.38h160.92l28.46-156.93 39.54 6.31L820-306.92V-100h-40v-175.38H660V-100h-40ZM270.92-660h418.16L480-806.62 270.92-660Z" />
  </svg>
);
