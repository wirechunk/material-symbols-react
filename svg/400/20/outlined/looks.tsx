import type { SVGProps } from "react";
export const SvgLooks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-240q0-90 33.81-168.4 33.81-78.39 92.6-137.19 58.8-58.79 137.19-92.6Q390-672 480-672t168.4 33.81q78.39 33.81 137.19 92.6 58.79 58.8 92.6 137.19Q912-330 912-240h-72q0-150-105-255T480-600q-150 0-255 105T120-240H48Zm144 0q0-120 84-204t204-84q120 0 204 84t84 204h-72q0-89.64-63.18-152.82Q569.64-456 480-456q-89.64 0-152.82 63.18Q264-329.64 264-240h-72Z" />
  </svg>
);
