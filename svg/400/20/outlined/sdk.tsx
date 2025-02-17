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
    <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-474q0-14.36 6-27.18T165-741l54-54q9-11 23-16t28-5h420q14 0 27.5 5t23.5 16l54 54q9 11 15 23.82t6 27.18v474q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm6-552h516l-48-48H270l-48 48Zm-6 480h528v-408H216v408Zm359-71 133-133-133-133-51 50 82 83-82 83 51 50Zm-190 0 51-50-82-83 82-83-51-50-133 133 133 133Zm-169 71v-408 408Z" />
  </svg>
);
