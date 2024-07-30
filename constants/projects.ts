import { Icanread } from "./images";
import {
  elementorSvg,
  woocommerceSvg,
  wordpressSvg,
  chatSvg,
  reactSvg,
  tsSvg,
  tailwindSvg,
  threeSvg,
  framerSvg,
} from "./svgs";

export const projects = [
  {
    thumbnail: Icanread.src,
    title: "Assignment Sol",
    description:
      "A React app that integrates with google and open api to generate response based on user input and generate images, simplifies surfing the internet",
    tools: [reactSvg, tsSvg, tailwindSvg, framerSvg, threeSvg],
    link: "https://www.github.com/aziz-codes/assignment-sol",
    githubLink: true,
  },
  ,
  {
    thumbnail: Icanread.src,
    title: "Icanread.mv",
    description:
      "A vibrant e-commerce WordPress site designed for kids' books, catering to ages up to 13. It features a user-friendly interface and engaging design to help parents and children easily explore and purchase books tailored to young readers.",
    tools: [elementorSvg, wordpressSvg, chatSvg, woocommerceSvg],
    link: "https://www.icanread.mv",
    githubLink: false,
  },
];
