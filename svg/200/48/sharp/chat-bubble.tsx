import type { SVGProps } from "react";
export const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-156.92V-840h720v560H243.08L120-156.92Zm109.38-153.85h579.85v-498.46H150.77v580l78.61-81.54Zm-78.61 0v-498.46 498.46Z" />
  </svg>
);
