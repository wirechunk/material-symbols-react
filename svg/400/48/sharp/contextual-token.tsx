import type { SVGProps } from "react";
export const SvgContextualToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M244-325h266v-102H244v102Zm370 0h102v-309H614v309ZM244-532h266v-102H244v102ZM140-220h680v-520H140v520Zm-60 60v-640h800v640H80Zm60-60v-520 520Z" />
  </svg>
);
