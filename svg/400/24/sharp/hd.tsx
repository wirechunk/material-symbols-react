import type { SVGProps } from "react";
export const SvgHd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-360h60v-80h80v80h60v-240h-60v100h-80v-100h-60v240Zm280 0h170l30-30v-180l-30-30H520v240Zm60-60v-120h80v120h-80ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
);
