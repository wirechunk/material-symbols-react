import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M182.15-665.63v483.48h595.7v-483.48h-134.5v342.48L480-404.83l-163.11 81.68v-342.48H182.15Zm-68.13 551.61v-611.63l90.61-120.57h549.98l91.61 120.57v611.63h-732.2Zm89.2-618.07h552.56l-36-46H239.22l-36 46Zm180.13 66.46v234.96L480-479l96.89 48.33v-234.96H383.35Zm-201.2 0h595.7-595.7Z" />
  </svg>
);
