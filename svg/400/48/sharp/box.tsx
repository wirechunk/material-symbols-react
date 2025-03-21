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
    <path d="M180-674v494h600v-494H640v342l-160-80-160 80v-342H180Zm-60 554v-609l82-111h555l83 111v609H120Zm77-614h565l-36-46H233l-36 46Zm183 60v245l100-50 100 50v-245H380Zm-200 0h600-600Z" />
  </svg>
);
