import type { SVGProps } from "react";
export const SvgInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M170.87-174.3q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-121.2h83v121.2h618.26v-445.4H170.87v121.2h-83v-121.2q0-34.78 24.26-58.89t58.74-24.11h618.26q34.48 0 58.74 24.27 24.26 24.28 24.26 58.77v445.64q0 34.5-24.26 58.61t-58.74 24.11H170.87Zm237.85-128.13-58.65-58.42 77.41-77.65H87.87v-83h339.61l-77.41-77.65 58.65-58.42L586.28-480 408.72-302.43Z" />
  </svg>
);
