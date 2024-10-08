import type { SVGProps } from "react";
export const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-392.35 392.35-480 480-567.65 567.65-480 480-392.35Zm-85-248.63L289.98-746 480-936.02 670.02-746 565-640.98l-85-85-85 85Zm-181 351L23.98-480 214-670.02 319.02-565l-85 85 85 85L214-289.98Zm532 0L640.98-395l85-85-85-85L746-670.02 936.02-480 746-289.98Zm-266 266L289.98-214 395-319.02l85 85 85-85L670.02-214 480-23.98Z" />
  </svg>
);
