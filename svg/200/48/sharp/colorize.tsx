import type { SVGProps } from "react";
export const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-124.15l360.08-360.08-78.93-78.92 20.23-21 100.47 98.92 163.69-164.46 83.38 84.92-165.23 164.46 100.46 100.46-21 21-80.46-79.69L284.15-160H160Zm30.77-30.77h83.92l348.08-348.85-83.15-83.15-348.85 348.08v83.92Zm433-393.08 140.92-140.92-39.92-39.92L583.85-623l39.92 39.15Zm0 0L583.85-623l39.92 39.15Z" />
  </svg>
);
