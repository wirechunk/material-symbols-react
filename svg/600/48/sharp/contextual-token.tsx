import type { SVGProps } from "react";
export const SvgContextualToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M240.61-321.61h273.91v-109.91H240.61v109.91Zm369.43 0h109.35v-315.78H610.04v315.78ZM240.61-528.04h273.91v-109.35H240.61v109.35Zm-95.52 302.95h669.82v-509.82H145.09v509.82Zm-79.22 79.22V-814.7H894.7v668.83H65.87Zm79.22-79.22v-509.82 509.82Z" />
  </svg>
);
