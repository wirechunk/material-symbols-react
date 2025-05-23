import type { SVGProps } from "react";
export const SvgOutbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-592h592v592H184Zm32-32h528v-159.38H608.92q-15.3 43-50.42 69.5-35.12 26.5-78.5 26.5-44.38 0-79.5-26t-49.42-70H216V-216Zm264-95.38q40 0 68-28t28-68h168V-744H216v336.62h168q0 40 28 68t68 28ZM216-216h528-528Zm248-243.69v-147.54l-77 77L363.69-552 480-668.31 596.31-552 573-530.23l-77-77v147.54h-32Z" />
  </svg>
);
