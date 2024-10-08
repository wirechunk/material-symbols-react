import type { SVGProps } from "react";
export const SvgBarcodeReader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M255.91-144Q200-144 167-187.5T148-285l70-260q-32-18-53-51.54T144-672q0-60 42-102t102-42h428L572-528H445l-13 48h48v144h-87l-29 109q-10.25 36.78-40.07 59.89T255.91-144Zm.09-72q14 0 24.5-8t14.5-22l75-282h-81.93L217-266q-5 19 7 34.5t32 15.5Zm484-531-20-44 132-61 20 44-132 61Zm112 267-132-61 20-44 132 61-20 44ZM744-648v-48h144v48H744ZM329-528Zm-41-72h240l72-144H288q-29.7 0-50.85 21.21-21.15 21.21-21.15 51T237.15-621q21.15 21 50.85 21Zm120-72Z" />
  </svg>
);
