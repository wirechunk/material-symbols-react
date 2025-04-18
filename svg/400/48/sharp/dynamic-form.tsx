import type { SVGProps } from "react";
export const SvgDynamicForm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-510v-290h460v290H80Zm60-60h340v-170H140v170ZM80-160v-290h540v290H80Zm60-60h420v-170H140v170Zm540 60v-350h-80v-290h280l-80 220h80L680-160ZM195-275h60v-60h-60v60Zm0-350h60v-60h-60v60Zm-55 55v-170 170Zm0 350v-170 170Z" />
  </svg>
);
