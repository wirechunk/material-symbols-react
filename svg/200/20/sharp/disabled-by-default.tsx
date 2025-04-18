import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-528H216v528Zm-32 32v-592h592v592H184Zm166-143.46 130.19-130.19 130.18 130.19 22.17-22.17-130.19-130.18L632.54-610 610-632.54 479.81-502.35 349.63-632.54l-22.17 22.17 130.19 130.18L327.46-350 350-327.46ZM216-216v-528 528Z" />
  </svg>
);
