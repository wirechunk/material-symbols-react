import type { SVGProps } from "react";
export const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-361.43 361.43-480 480-598.57 598.57-480 480-361.43Zm-85-318.31-92.04-92.04L480-948.26l177.04 176.48L565-679.74l-85-85-85 85ZM188.78-302.96 11.74-480l177.04-177.04L280.26-565l-85 85 85 85-91.48 92.04Zm583 0L679.74-395l85-85-85-85 92.04-92.04L948.26-480 771.78-302.96ZM480-11.74 302.96-188.78 395-280.26l85 85 85-85 92.04 91.48L480-11.74Z" />
  </svg>
);
