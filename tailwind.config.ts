import type { Config } from "tailwindcss";
import twAnimateCss from "tw-animate-css";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [twAnimateCss],
};

export default config;
