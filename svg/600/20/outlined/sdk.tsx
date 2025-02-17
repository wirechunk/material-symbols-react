import type { SVGProps } from "react";
export const SvgSdk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M222.78-124.78q-41 0-69.5-28.5t-28.5-69.5V-690q0-18 7.13-34.07T150.3-754l54-52.87q11.83-14.39 29.79-21.37 17.95-6.98 35.91-6.98h420q17.96 0 35.41 6.98 17.46 6.98 30.29 21.37l54 52.87q11.26 13.86 18.39 29.93 7.13 16.07 7.13 34.07v467.22q0 41-28.5 69.5t-69.5 28.5H222.78ZM222-689.22h516l-48-48H270l-48 48Zm.78 466.44h514.44v-394.44H222.78v394.44ZM571.61-287l133-133-133-133-51 50 82 83-82 83 51 50Zm-183.22 0 51-50-82-83 82-83-51-50-133 133 133 133Zm-165.61 64.22v-394.44 394.44Z" />
  </svg>
);
