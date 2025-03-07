import type { SVGProps } from "react";
export const SvgCropRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M478 0q-93 0-176-33.5t-147-92Q91-184 50-262.5T0-432h72q9 72 41 135.5T195.5-185Q246-137 311-107.5T449-73l-67-68 50-51L607-18Q569-7 536-3.5T478 0Zm122-192v-96H360q-30 0-51-21t-21-51v-240h-96v-72h96v-96h72v408h408v72h-96v96h-72Zm0-240v-168H432v-72h168q30 0 51 21t21 51v168h-72Zm288-96q-9-72-41-135.5T764.5-775q-50.5-48-115-77.5T511-887l67 68-50 51-175-174q38-11 71-14.5t58-3.5q93 0 176 33.5t147 92q64 58.5 105 137T960-528h-72Z" />
  </svg>
);
