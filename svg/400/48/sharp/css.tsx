import type { SVGProps } from "react";
export const SvgCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M380-360v-80h48v32h104v-53H380v-139h200v80h-48v-32H428v53h152v139H380Zm260 0v-80h48v32h104v-53H640v-139h200v80h-48v-32H688v53h152v139H640Zm-520 0v-240h200v80h-48v-32H168v144h104v-32h48v80H120Z" />
  </svg>
);
