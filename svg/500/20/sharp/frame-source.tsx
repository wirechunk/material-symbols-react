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
    <path d="M348-340.11 208.11-480 348-619.89 406.65-561l-80.76 81 80.76 81L348-340.11Zm264 0L553.35-399l80.76-81-80.76-81L612-619.89 751.89-480 612-340.11ZM135.87-135.87V-384h83v165.13H384v83H135.87Zm440.13 0v-83h165.13V-384h83v248.13H576ZM135.87-576v-248.13H384v83H218.87V-576h-83Zm605.26 0v-165.13H576v-83h248.13V-576h-83Z" />
  </svg>
);
