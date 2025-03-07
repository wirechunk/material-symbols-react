import type { SVGProps } from "react";
export const SvgMan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M408-132v-204h-35.79q-15.21 0-25.71-10.36-10.5-10.37-10.5-25.68v-180.22Q336-582 357.18-603q21.17-21 50.91-21h144.17Q582-624 603-602.87q21 21.12 21 50.79v179.8q0 15.28-10.35 25.78Q603.3-336 588-336h-36v204q0 15.3-10.32 25.65Q531.35-96 516.09-96h-71.83Q429-96 418.5-106.35 408-116.7 408-132Zm71.75-564q-34.75 0-59.25-24.75t-24.5-59.5q0-34.75 24.75-59.25t59.5-24.5q34.75 0 59.25 24.75t24.5 59.5q0 34.75-24.75 59.25t-59.5 24.5Z" />
  </svg>
);
