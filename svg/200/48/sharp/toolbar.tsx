import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm30.77-476.85h578.46v-132.38H190.77v132.38Zm578.46 30.77H190.77v415.31h578.46v-415.31Zm-578.46-30.77v30.77-30.77Zm0 0v-132.38 132.38Zm0 30.77v415.31-415.31Z" />
  </svg>
);
