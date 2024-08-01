import { Icanread, Assignment, SecureEye, Wiserbee } from "./images";
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
  webrtcSvg,
  tensorFlow,
  bootstrapSvg,
} from "./svgs";

export const projects = [
  {
    thumbnail: SecureEye.src,
    title: "Secure Eye",
    description:
      "Experience seamless and real-time video streaming with our cutting-edge IP Camera Streaming Platform, built using React and WebRTC. This project enables users to connect and view multiple IP cameras effortlessly, providing a live stream directly within the browser",
    tools: [reactSvg, tailwindSvg, framerSvg, webrtcSvg, tensorFlow],
    link: "https://react-demo.swatitech.com/secureeye",
    githubLink: false,
  },
  {
    thumbnail: Assignment.src,
    title: "Assignment Sol",
    description:
      "A React app that assists students to make their assignments, integrates with google and open api to generate response based on user input and generate images, simplifies surfing the internet",
    tools: [reactSvg, tailwindSvg, framerSvg],
    link: "https://www.github.com/aziz-codes/assignment-sol",
    githubLink: true,
  },
  {
    thumbnail: Wiserbee.src,
    title: "WiserBee",
    description:
      "A React app that assists students to make their assignments, integrates with google and open api to generate response based on user input and generate images, simplifies surfing the internet",
    tools: [reactSvg, bootstrapSvg, framerSvg],
    link: "#",
    githubLink: false,
  },

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

export const projectFiles = [
  {
    label: "index.tsx",
    path: "/projects",
  },
  {
    label: "secure-eye.tsx",
    path: "/secure-eye",
  },
  {
    label: "wiserbee.tsx",
    path: "/wiserbee",
  },
  {
    label: "icanread-mv.tsx",
    path: "/icanread-mv",
  },
];
