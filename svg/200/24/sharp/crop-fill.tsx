import type { SVGProps } from "react";
export const SvgCropFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M700-60v-160H220v-480H60v-40h160v-160h40v640h640v40H740v160h-40Zm0-240v-400H300v-40h440v440h-40Z" />
  </svg>
);
