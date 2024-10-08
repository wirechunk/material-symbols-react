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
    <path d="M450-90v-520H111.54L480-867.69 848.46-610H510v520h-60Zm30-580h177.54-355.08H480ZM130-90v-208.46L99.54-466l58.77-10.15 29.23 158.46H350V-90h-60v-167.69H190V-90h-60Zm480 0v-227.69h162.46l29.23-158.46L860.46-466 830-298.46V-90h-60v-167.69H670V-90h-60ZM302.46-670h355.08L480-794.31 302.46-670Z" />
  </svg>
);
