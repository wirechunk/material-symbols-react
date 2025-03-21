import type { SVGProps } from "react";
export const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M197.69-140q-23.53 0-40.61-17.08T140-197.69v-564.62q0-23.53 17.08-40.61T197.69-820h564.62q23.53 0 40.61 17.08T820-762.31v75h-45.39v-75q0-4.61-3.84-8.46-3.85-3.84-8.46-3.84H197.69q-4.61 0-8.46 3.84-3.84 3.85-3.84 8.46v564.62q0 4.61 3.84 8.46 3.85 3.84 8.46 3.84h564.62q4.61 0 8.46-3.84 3.84-3.85 3.84-8.46v-75H820v75q0 23.53-17.08 40.61T762.31-140H197.69Zm486.69-164.39L652.77-336l119.92-121.31h-405v-45.38h405L652.77-624l31.61-31.61L860-480 684.38-304.39Z" />
  </svg>
);
