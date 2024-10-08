import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M67-67v-502.48l306-130.3v80.56l200-81.56v128.01h320V-67H67Zm79.22-79.22h667.56v-347.2H496.61v-88.97l-200 80v-79.57l-150.39 65.92v369.82ZM443.78-240h72.44v-160h-72.44v160ZM277-240h73v-160h-73v160Zm333 0h73v-160h-73v160Zm283-333H698.3l40-316.61h113L893-573ZM146.22-146.22h667.56-667.56Z" />
  </svg>
);
