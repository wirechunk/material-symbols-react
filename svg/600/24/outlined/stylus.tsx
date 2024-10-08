import type { SVGProps } from "react";
export const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M169.83-105.87q-28.92 6.7-49.5-14.17-20.59-20.87-14.46-49.79l40.56-195.52 218.92 218.92-195.52 40.56Zm195.52-40.56L146.43-365.35l457.44-457.43q30.91-30.92 75.09-30.92 44.17 0 75.08 30.92l68.74 68.74q30.92 30.91 30.92 75.08 0 44.18-30.92 75.09L365.35-146.43Zm313.61-601.7L276.83-346 346-276.83l402.13-402.13-69.17-69.17Z" />
  </svg>
);
