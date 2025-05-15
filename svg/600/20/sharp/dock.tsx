import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M327.52-56.74v-72h304.96v72H327.52Zm280.65-240.87v-515H352.39v515h255.78ZM479.79-683.56q17.13 0 28.93-11.59t11.8-28.73q0-17.13-11.59-28.93t-28.72-11.8q-17.13 0-28.93 11.59t-11.8 28.72q0 17.14 11.59 28.94t28.72 11.8Zm-127.4-129.05v515-515Zm-98 613v-711h451.78v153.48h36v158.96h-36v398.56H254.39Z" />
  </svg>
);
