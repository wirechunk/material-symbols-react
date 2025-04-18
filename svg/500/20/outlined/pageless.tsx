import type { SVGProps } from "react";
export const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M408-87.87H122.87q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74V-408h83v237.13H408v83Zm144 0v-83h285.37V-408h83v237.13q0 34.78-24.26 58.89t-58.74 24.11H552ZM39.87-552v-237.13q0-34.78 24.26-58.89t58.74-24.11H408v83H122.87V-552h-83Zm797.5 0v-237.13H552v-83h285.37q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74V-552h-83Z" />
  </svg>
);
