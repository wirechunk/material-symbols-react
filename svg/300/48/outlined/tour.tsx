import type { SVGProps } from "react";
export const SvgTour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M210-90v-780h45.38v82.85h570l-76.77 184.92 76.77 184.92h-570V-90H210Zm45.38-651.77v279.08-279.08Zm245.64 203.85q26.52 0 45.21-18.82 18.69-18.81 18.69-45.7 0-26.9-18.81-45.5t-45.71-18.6q-26.32 0-45.01 18.82-18.7 18.81-18.7 45.7 0 26.89 18.91 45.5 18.9 18.6 45.42 18.6Zm-245.64 75.23h502.54L701-602.23l56.92-139.54H255.38v279.08Z" />
  </svg>
);
