import type { SVGProps } from "react";
export const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm306-223h335v-257H446v257Zm60-60v-137h215v137H506ZM140-220v-520 520Z" />
  </svg>
);
