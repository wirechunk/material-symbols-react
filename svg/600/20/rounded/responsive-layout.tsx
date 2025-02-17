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
    <path d="M120.82-222.78v-322.44q0-41 28.5-69.5t69.51-28.5H321.3V-745.7q0-41 28.5-69.5t69.5-28.5h321.87q41.01 0 69.51 28.5 28.5 28.5 28.5 69.5v522.92q0 41-28.5 69.5t-69.51 28.5H218.83q-41.01 0-69.51-28.5-28.5-28.5-28.5-69.5Zm517.88 0h102.47V-745.7H419.3v102.48h121.4q41 0 69.5 28.5t28.5 69.5v322.44Zm-219.4 0h121.4v-322.44H419.3v322.44Zm-200.47 0H321.3v-322.44H218.83v322.44Z" />
  </svg>
);
