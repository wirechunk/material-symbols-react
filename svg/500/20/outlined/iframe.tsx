import type { SVGProps } from "react";
export const SvgIframe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M484.3-436.3h183.4v-63.4H484.3v63.4Zm-56.6 56.6v-176.6h296.6v176.6H427.7ZM170.87-183.87q-34.48 0-58.74-24.27-24.26-24.27-24.26-58.77v-426.5q0-34.5 24.26-58.61t58.74-24.11h618.26q34.48 0 58.74 24.27 24.26 24.27 24.26 58.77v426.5q0 34.5-24.26 58.61t-58.74 24.11H170.87Zm0-83h618.26v-349H170.87v349Z" />
  </svg>
);
