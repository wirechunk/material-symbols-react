import type { SVGProps } from "react";
export const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120v-480h120v-80q0-66.85 46.58-113.42Q413.15-840 480-840t113.42 46.58Q640-746.85 640-680v80h120v480H200Zm40-40h480v-400H240v400Zm240-140q25.31 0 42.65-17.35Q540-334.69 540-360t-17.35-42.65Q505.31-420 480-420t-42.65 17.35Q420-385.31 420-360t17.35 42.65Q454.69-300 480-300ZM360-600h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
  </svg>
);
