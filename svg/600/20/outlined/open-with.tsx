import type { SVGProps } from "react";
export const SvgOpenWith = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-61.52 293.91-247.61 363-316.7l68 68v-154.78h98v154.78l68-68 69.09 69.09L480-61.52ZM247.61-293.91 61.52-480l186.09-186.09L316.7-597l-68 68h154.78v98H248.7l68 68-69.09 69.09Zm464.78 0L643.3-363l68-68H556.52v-98H711.3l-68-68 69.09-69.09L898.48-480 712.39-293.91ZM431-556.52V-711.3l-68 68-69.09-69.09L480-898.48l186.09 186.09L597-643.3l-68-68v154.78h-98Z" />
  </svg>
);
