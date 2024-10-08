import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M185.09-185.09h589.82v-355.17q-20.43 11.3-43.07 16.46-22.65 5.15-45.84 5.15-70.41 0-119.88-49.47T516.65-688q0-22.52 5.15-44.5 5.16-21.98 16.46-42.41H185.09v589.82Zm-79.22 79.22V-854.7H854.7v748.83H105.87Zm79.22-669.04v589.82-589.82Z" />
  </svg>
);
