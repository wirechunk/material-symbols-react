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
    <path d="M27-107v-195h73v122h122v73H27Zm710 0v-73h122v-122h73v195H737ZM153-231v-499h80v499h-80Zm121 0v-499h42v499h-42Zm122 0v-499h83v499h-83Zm125 0v-499h121v499H521Zm163 0v-499h42v499h-42Zm83 0v-499h38v499h-38ZM27-658v-195h195v73H100v122H27Zm832 0v-122H737v-73h195v195h-73Z" />
  </svg>
);
