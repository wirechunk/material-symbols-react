import type { SVGProps } from "react";
export const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-122.62l335.08-335.07-68.62-68.39 21.77-23.3 88.92 88.15 142.39-143.15 82.08 86.61-141.93 141.92 88.93 89.16-22.54 22.54-70.93-69.39L306.62-184H184Zm32-32h77.54l325.38-325.38-76.54-77.54L216-293.54V-216Zm402.46-363.46 122.31-123.31-38-39-123.31 123.08 39 39.23Zm0 0-39-39.23 39 39.23Z" />
  </svg>
);
