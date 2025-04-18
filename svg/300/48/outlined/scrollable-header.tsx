import type { SVGProps } from "react";
export const SvgScrollableHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M197.69-140q-23.53 0-40.61-17.08T140-197.69v-564.62q0-23.53 17.08-40.61T197.69-820h564.62q23.53 0 40.61 17.08T820-762.31v564.62q0 23.53-17.08 40.61T762.31-140H197.69Zm0-45.39h564.62q4.61 0 8.46-3.84 3.84-3.85 3.84-8.46V-415H185.39v217.31q0 4.61 3.84 8.46 3.85 3.84 8.46 3.84Zm-12.3-274.99h589.22v-301.93q0-4.61-3.84-8.46-3.85-3.84-8.46-3.84H197.69q-4.61 0-8.46 3.84-3.84 3.85-3.84 8.46v301.93Zm0 0V-774.61v314.23Z" />
  </svg>
);
