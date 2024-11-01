import type { SVGProps } from "react";
export const SvgScrollableHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm30.77-30.77h578.46V-420H190.77v229.23Zm0-260h578.46v-318.46H190.77v318.46Zm0 0v-318.46 318.46Z" />
  </svg>
);
