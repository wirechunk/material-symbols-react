import type { SVGProps } from "react";
export const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M212.31-300Q182-300 161-321q-21-21-21-51.31v-215.38Q140-618 161-639q21-21 51.31-21h535.38Q778-660 799-639q21 21 21 51.31v215.38Q820-342 799-321q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-215.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v215.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM140-747.69v-60h680v60H140Zm0 595.38v-60h680v60H140ZM200-600v240-240Z" />
  </svg>
);
