import type { SVGProps } from "react";
export const SvgQuiz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M552-360q17 0 28.5-11.5T592-400q0-17-11.5-28.5T552-440q-17 0-28.5 11.5T512-400q0 17 11.5 28.5T552-360Zm-29-122h58q0-29 4.5-41.5T608-553q21-20 37.5-40t16.5-51q0-45-30.39-72.5Q601.21-744 552-744q-38 0-68 21.5t-42 58.87L494-642q7-23 22.5-35t35.5-12q23.11 0 37.56 13Q604-663 604-642t-15.5 36.5Q573-590 556-574q-22 20-27.5 36.5T523-482ZM240-240v-624h624v624H240Zm72-72h480v-480H312v480ZM96-96v-624h72v552h552v72H96Zm216-696v480-480Z" />
  </svg>
);
