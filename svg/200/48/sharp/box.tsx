import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M190.77-663.23v472.46h578.46v-472.46H600V-382l-120-60-120 60v-281.23H190.77ZM160-160v-523.62L252-800h455l93 117.92V-160H160Zm46.23-534H752l-61.38-75.23H268.38L206.23-694Zm184.54 30.77v231.15L480-476.69l89.23 44.61v-231.15H390.77Zm-200 0h578.46-578.46Z" />
  </svg>
);
