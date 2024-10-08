import type { SVGProps } from "react";
export const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M683-92.48V-179H277q-41 0-69.5-28.5T179-277v-406H92.74q-20.35 0-34.81-14.25-14.45-14.24-14.45-34.54 0-20.3 14.3-34.62 14.31-14.33 34.7-14.33H179v-86.72q0-20.41 14.31-34.74 14.3-14.32 34.69-14.32 20.39 0 34.69 14.3Q277-887.91 277-867.52V-277h590.52q20.39 0 34.7 14.25 14.3 14.24 14.3 34.54 0 20.3-14.3 34.62-14.31 14.33-34.7 14.33H781v86.72q0 20.41-14.31 34.74-14.3 14.32-34.69 14.32-20.39 0-34.69-14.3Q683-72.09 683-92.48ZM683-349v-334H349v-98h334q41 0 69.5 28.5T781-683v334h-98Z" />
  </svg>
);
