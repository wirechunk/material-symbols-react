import type { SVGProps } from "react";
export const SvgComicBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m432-799.28-79.56 79.56H240.28v112.16L160.72-528l79.56 79.56v112.16h112.16L432-256.72l95-95 158.8 77.76-77.28-159.28L703.28-528l-79.56-79.56v-112.16H511.56L432-799.28Zm0-113.2 112.63 112.63h159.22v159.22L816.48-528 706.04-417.33 809-206.65 753.35-151 542.67-253.96 432-143.52 319.37-256.15H160.15v-159.22L47.52-528l112.63-112.63v-159.22h159.22L432-912.48ZM432-528Z" />
  </svg>
);
