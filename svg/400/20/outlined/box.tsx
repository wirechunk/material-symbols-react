import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-624v408h528v-408H624v288l-144-72-144 72v-288H216Zm0 480q-29.7 0-50.85-21.15Q144-186.3 144-216v-474q0-14 5.25-27T165-741l54-54q11-11 23.94-16 12.94-5 27.06-5h420q14.12 0 27.06 5T741-795l54 54q10.5 11 15.75 24t5.25 27v474q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm6-552h516l-48-48H270l-48 48Zm186 72v171l72-36 72 36v-171H408Zm-192 0h528-528Z" />
  </svg>
);
