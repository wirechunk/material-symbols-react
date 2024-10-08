import type { SVGProps } from "react";
export const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M135.87-135.87v-189.48L474.52-664l-54.24-53L483-779.48l72 72 136.52-137.48 151.44 154.44-135.72 134.76 72 73L717-420.52l-54-54-337.65 338.65H135.87Zm83-83h71.93L607.93-536 537-607.93 218.87-290.8v71.93Zm424.72-384.76L731.2-692 692-732.2l-88.37 87.61 39.96 40.96Zm0 0-39.96-40.96 39.96 40.96Z" />
  </svg>
);
