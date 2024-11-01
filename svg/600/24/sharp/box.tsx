import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M206.78-613.43v406.65h546.44v-406.65H650.17v321.13L480-377.39 309.83-292.3v-321.13H206.78Zm-106 512.65v-616.48l119.13-142.52h520.18l119.13 142.52v616.48H100.78Zm135-613h488.44l-34-40H269.78l-34 40Zm174.39 100.35v158.34L480-490l69.83 34.91v-158.34H410.17Zm-203.39 0H753.22 206.78Z" />
  </svg>
);
