import type { SVGProps } from "react";
export const SvgCrossword = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M386-140h187v-186H386v186ZM140-386h186v-187H140v187Zm246 0h187v-187H386v187Zm247 0h187v-187H633v187Zm0-247h187v-187H633v187ZM326-80v-246H80v-307h493v-247h307v554H633v246H326Z" />
  </svg>
);
