import type { SVGProps } from "react";
export const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M577-274h191v-194h-60v134H577v60ZM193-492h60v-134h131v-60H193v194ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z" />
  </svg>
);
