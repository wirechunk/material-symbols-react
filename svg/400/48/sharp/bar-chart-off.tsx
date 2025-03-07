import type { SVGProps } from "react";
export const SvgBarChartOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-440h140v440H160Zm250 0v-390l140 140v250H410Zm140-336L410-636v-164h140v304Zm250 250L660-386v-54h140v194Zm13 185L61-813l43-43 752 752-43 43Z" />
  </svg>
);
