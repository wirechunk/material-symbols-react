import type { SVGProps } from "react";
export const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-45l678-675h42v44L161-120h-41Zm0-278v-86l356-356h86L120-398Zm0-320v-122h122L120-718Zm598 598 122-122v122H718Zm-320 0 442-442v86L484-120h-86Z" />
  </svg>
);
