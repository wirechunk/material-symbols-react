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
    <path d="M348-362.23 230.23-480 348-597.77 384.77-561l-81 81 81 81L348-362.23Zm264 0L575.23-399l81-81-81-81L612-597.77 729.77-480 612-362.23ZM164-164v-220h52v168h168v52H164Zm412 0v-52h168v-168h52v220H576ZM164-576v-220h220v52H216v168h-52Zm580 0v-168H576v-52h220v220h-52Z" />
  </svg>
);
