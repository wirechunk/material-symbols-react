import type { SVGProps } from "react";
export const SvgSwipe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M860-672.31H672.31V-720H796q-67.15-56.84-147.58-89.77Q568-842.69 480-842.69q-88 0-168.42 32.92Q231.15-776.84 164-720h123.69v47.69H100V-860h47.69v90.62q71.62-56.69 156.12-88.85 84.5-32.15 176.19-32.15t176.19 32.15q84.5 32.16 156.12 88.85V-860H860v187.69ZM427.62-100 194.77-333.08l49.92-50.38L370-350.31V-710h60v439.54l-121.23-33.16 144 143.62H720v-280h60v340H427.62Zm58.92-270v-190h60v190h-60Zm116.92 0v-150h60v150h-60Zm-24 92.69Z" />
  </svg>
);
