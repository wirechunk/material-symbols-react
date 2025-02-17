import type { SVGProps } from "react";
export const SvgPiano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-80h130v-180h-50v-380h-80v560Zm430 0h130v-560h-80v380h-50v180Zm-240 0h180v-180h-50v-380h-80v380h-50v180Z" />
  </svg>
);
