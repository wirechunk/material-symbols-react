import type { SVGProps } from "react";
export const SvgPiano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-680h680v680H140Zm60-60h138.08v-186.15h-50V-760H200v560Zm421.92 0H760v-560h-88.08v373.85h-50V-200Zm-236.15 0h188.46v-186.15h-50V-760h-88.46v373.85h-50V-200Z" />
  </svg>
);
