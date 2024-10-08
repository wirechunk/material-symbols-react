import type { SVGProps } from "react";
export const SvgDrawFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-144v-153l549-549 153 153-549 549H192Zm549-498 51-51-51-51-51 51 51 51Zm3 366q0-34-15.5-56.5T679-376l-54 53q25 13 36 22.5t11 24.5q0 23-40 41.5T528-216v72q88 0 152-35.5t64-96.5ZM216-423l56-56q-23-5-39.5-16.5T216-516q0-10 18-23t67-37q74-37 102.5-65.5T432-708q0-49-36.5-78.5T298-816q-45 0-85 20.5T144-737l50 46q23-26 50-39.5t54-13.5q29 0 45.5 9.5T360-708q0 14-19 28t-72 40q-70 34-97.5 61T144-516q0 30 18.5 54t53.5 39Z" />
  </svg>
);
