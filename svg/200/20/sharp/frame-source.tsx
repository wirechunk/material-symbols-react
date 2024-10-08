import type { SVGProps } from "react";
export const SvgFrameSource = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M348-376.46 244.46-480 348-583.54 370.54-561l-81 81 81 81L348-376.46Zm264 0L589.46-399l81-81-81-81L612-583.54 715.54-480 612-376.46ZM184-184v-200h32v168h168v32H184Zm392 0v-32h168v-168h32v200H576ZM184-576v-200h200v32H216v168h-32Zm560 0v-168H576v-32h200v200h-32Z" />
  </svg>
);
