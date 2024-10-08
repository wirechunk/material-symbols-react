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
    <path d="M216-631.69V-216h528v-415.69H584v239.54l-104-52-104 52v-239.54H216ZM184-184v-491.38L284.62-776h390L776-673.85V-184H184Zm37.23-479.69H738L663.08-744H296.15l-74.92 80.31Zm186.77 32v187.15l72-36 72 36v-187.15H408Zm-192 0h528-528Z" />
  </svg>
);
