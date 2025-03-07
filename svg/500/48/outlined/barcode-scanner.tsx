import type { SVGProps } from "react";
export const SvgBarcodeScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M34.5-114.5V-302H100v122h122v65.5H34.5Zm702.5 0V-180h122v-122h65.5v187.5H737ZM153-231v-499h80v499h-80Zm121 0v-499h42v499h-42Zm122 0v-499h83v499h-83Zm125 0v-499h121v499H521Zm163 0v-499h42v499h-42Zm83 0v-499h38v499h-38ZM34.5-658v-187.5H222v65.5H100v122H34.5Zm824.5 0v-122H737v-65.5h187.5V-658H859Z" />
  </svg>
);
