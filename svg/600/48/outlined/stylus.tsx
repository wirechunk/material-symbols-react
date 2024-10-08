import type { SVGProps } from "react";
export const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M169.26-109.26q-27.22 6.13-46.39-13.33-19.17-19.45-13.61-46.67l40.57-194.39 213.82 213.82-194.39 40.57Zm194.39-40.57L149.83-363.65l472.43-472.44q23.22-23.21 55.85-23.21t55.28 23.21l102.7 102.7q23.21 22.65 23.21 55.28t-23.21 55.85L363.65-149.83Zm314.18-629.13L244.87-346 346-244.87l432.96-432.96-101.13-101.13Z" />
  </svg>
);
