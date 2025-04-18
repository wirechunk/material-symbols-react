import type { SVGProps } from "react";
export const SvgArrowsInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M215-191.69 191.69-215l137-137H232v-32h152v152h-32v-96.69l-137 137Zm530 0-137-137V-232h-32v-152h152v32h-96.69l137 137L745-191.69ZM232-576v-32h96.69l-137-137L215-768.31l137 137V-728h32v152H232Zm344 0v-152h32v96.69l137-137L768.31-745l-137 137H728v32H576Zm-96.21 141.08q-18.68 0-31.78-13.31-13.09-13.3-13.09-31.98t13.31-31.78q13.3-13.09 31.98-13.09t31.78 13.31q13.09 13.3 13.09 31.98t-13.31 31.78q-13.3 13.09-31.98 13.09Z" />
  </svg>
);
