import type { SVGProps } from "react";
export const SvgExplosion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-316.54 48.06-48.06h67.34v-67.34L643.46-480l-48.06-48.06v-67.34h-67.34L480-643.46l-48.06 48.06H364.6v67.34L316.54-480l48.06 48.06v67.34h67.34L480-316.54Zm0 216.85L368.38-212H212v-156.38L99.69-480 212-591.62V-748h156.38L480-860.31 591.62-748H748v156.38L860.31-480 748-368.38V-212H591.62L480-99.69Zm0-74.31 90-90h126v-126l90-90-90-90v-126H570l-90-90-90 90H264v126l-90 90 90 90v126h126l90 90Zm0-306Z" />
  </svg>
);
