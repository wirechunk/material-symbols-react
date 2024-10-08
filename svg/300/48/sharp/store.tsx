import type { SVGProps } from "react";
export const SvgStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M168.46-744.62V-790h624.69v45.38H168.46ZM173.85-170v-253h-51.31v-45.38L168.46-670h623.69l46.31 201.62V-423h-51.31v253h-45.38v-253H540.46v253H173.85Zm45.38-45.38h275.85V-423H219.23v207.62Zm-52.31-253h626.77-626.77Zm0 0h626.77l-35.61-156.24H202.54l-35.62 156.24Z" />
  </svg>
);
