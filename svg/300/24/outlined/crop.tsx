import type { SVGProps } from "react";
export const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M690-50v-160H282.31Q252-210 231-231q-21-21-21-51.31V-690H50v-60h160v-160h60v627.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85H910v60H750v160h-60Zm0-280v-347.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H330v-60h347.69Q708-750 729-729q21 21 21 51.31V-330h-60Z" />
  </svg>
);
