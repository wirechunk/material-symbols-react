import type { SVGProps } from "react";
export const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M60.78-60.78v-838.44h838.44v678.44H220.78l-160 160Zm126-266h606.44v-466.44H166.78v486l20-19.56Zm-20 0v-466.44 466.44Z" />
  </svg>
);
