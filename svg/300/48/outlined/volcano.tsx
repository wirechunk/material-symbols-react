import type { SVGProps } from "react";
export const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m110.77-100 142.31-320h120.38l80-200H705l148.46 520H110.77Zm69.69-45.39h612.62L671.15-574.61h-187.3l-80 200H282.46l-102 229.22Zm374.08-623.84v-125.38h45.38v125.38h-45.38Zm171 71.38-31.62-31.61 88.62-88.23 32.61 31.23-89.61 88.61Zm-296.62 0-88.61-88.61 31.61-32.23 88.62 89.23-31.62 31.61Zm364.16 552.46H180.46h612.62Z" />
  </svg>
);
