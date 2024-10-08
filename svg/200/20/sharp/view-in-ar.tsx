import type { SVGProps } from "react";
export const SvgViewInAr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-170.46 212-323.69v-308l268-155.23 268 155.23v308L480-170.46Zm-16-44.31V-470L244-598.77v256.39l220 127.61Zm32 0 220-127.61v-255.39L496-469v254.23ZM136-672v-152h152v32H168v120h-32Zm152 536H136v-152h32v120h120v32Zm384 0v-32h120v-120h32v152H672Zm120-536v-120H672v-32h152v152h-32ZM480-497.38l215.54-126.31L480-747.54 264.46-623.69 480-497.38Zm0 16.15Zm0-16.15ZM496-469Zm-32-1Z" />
  </svg>
);
