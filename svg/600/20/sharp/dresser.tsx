import type { SVGProps } from "react";
export const SvgDresser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M170.52-122.52v-616.96q0-41 28.51-69.5t69.53-28.5h423.2q41.02 0 69.37 28.5t28.35 69.5v616.96h-98v-72H268.52v72h-98Zm98-401.96h169.26v-215H268.52v215Zm254.26-144h168.7v-71h-168.7v71Zm0 144h168.7v-59h-168.7v59ZM392-311h175v-85H392v85ZM268.52-439.48v159.96h422.96v-159.96H268.52Zm0 0v159.96-159.96Z" />
  </svg>
);
