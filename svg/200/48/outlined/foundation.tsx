import type { SVGProps } from "react";
export const SvgFoundation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M227.92-160v-153.69h-79.15v-30.77h79.15v-229.85L98.31-477.77 80-501.69 480-800l400.77 298.31-19.31 23.92-129.61-96.77v230.08h78.38v30.77h-78.38V-160h-30.77v-153.69h-205.7V-160h-30.76v-153.69H258.69V-160h-30.77Zm30.77-184.46h205.93v-406l-205.93 154v252Zm236.69 0h205.7v-252l-205.7-154v406Z" />
  </svg>
);
