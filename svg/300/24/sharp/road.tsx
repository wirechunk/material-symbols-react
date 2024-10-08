import type { SVGProps } from "react";
export const SvgRoad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-180v-600h60v600h-60Zm270 0v-141.54h60V-180h-60Zm270 0v-600h60v600h-60ZM450-409.23v-141.54h60v141.54h-60Zm0-229.23V-780h60v141.54h-60Z" />
  </svg>
);
