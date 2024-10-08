import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M120.82-124.78v-518.44H321.3V-843.7h517.88v718.92H120.82Zm517.88-98h102.47V-745.7H419.3v102.48h219.4v420.44Zm-219.4 0h121.4v-322.44H419.3v322.44Zm-200.47 0H321.3v-322.44H218.83v322.44ZM638.7-643.22v98-98Zm-317.4 98Zm219.4 0Zm98-98Z" />
  </svg>
);
