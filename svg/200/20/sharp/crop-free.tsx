import type { SVGProps } from "react";
export const SvgCropFree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-200h32v168h168v32H184Zm392 0v-32h168v-168h32v200H576ZM184-576v-200h200v32H216v168h-32Zm560 0v-168H576v-32h200v200h-32Z" />
  </svg>
);
