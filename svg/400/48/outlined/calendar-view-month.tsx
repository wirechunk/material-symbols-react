import type { SVGProps } from "react";
export const SvgCalendarViewMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-350h186v-230H140v230Zm246 0h188v-230H386v230Zm248 0h186v-230H634v230ZM326-220v-230H140v230h186Zm60 0h188v-230H386v230Zm248 0h186v-230H634v230Z" />
  </svg>
);
