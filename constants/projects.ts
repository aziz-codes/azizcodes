import {
  Icanread,
  Assignment,
  SecureEye,
  Wiserbee,
  Spacepark,
  Instagram,
} from "./images";
import {
  elementorSvg,
  woocommerceSvg,
  wordpressSvg,
  chatSvg,
  reactSvgLg,
  tsSvg,
  tailwindSvg,
  threeSvg,
  framerSvg,
  webrtcSvg,
  tensorFlow,
  bootstrapSvg,
  googleSvg,
  firebaseSvg,
  nextjsSvg,
  recoilSvg,
} from "./svgs";

export const projects = [
  {
    id: 1,
    thumbnail: SecureEye.src,
    title: "Secure Eye",
    description:
      "Experience seamless and real-time video streaming with our cutting-edge IP Camera Streaming Platform, built using React and WebRTC. This project enables users to connect and view multiple IP cameras effortlessly, providing a live stream directly within the browser",
    tools: [reactSvgLg, tailwindSvg, framerSvg, webrtcSvg, tensorFlow],
    link: "https://react-demo.swatitech.com/secureeye",
    githubLink: false,
  },
  {
    id: 2,
    thumbnail: Assignment.src,
    title: "Assignment Sol",
    description:
      "A React app that assists students to make their assignments, integrates with google and open api to generate response based on user input and generate images, simplifies surfing the internet",
    tools: [reactSvgLg, tailwindSvg, framerSvg],
    link: "https://www.github.com/aziz-codes/assignment-sol",
    githubLink: true,
  },
  {
    id: 3,
    thumbnail: Wiserbee.src,
    title: "WiserBee",
    description:
      "This versatile e-learning platform, developed with React, Bootstrap, and Redux Toolkit, offers a streamlined educational experience. It supports different user roles, catering to students, teachers, and administrators, each with tailored functionalities and interfaces. The platform ensures efficient course management, interactive learning, and seamless user interaction, providing a comprehensive solution for modern online education. ",

    tools: [reactSvgLg, bootstrapSvg, framerSvg],
    link: "#",
    githubLink: false,
  },

  {
    id: 4,
    thumbnail: Icanread.src,
    title: "Icanread.mv",
    description:
      "A vibrant e-commerce WordPress site designed for kids' books, catering to ages up to 13. It features a user-friendly interface and engaging design to help parents and children easily explore and purchase books tailored to young readers.",
    tools: [elementorSvg, wordpressSvg, chatSvg, woocommerceSvg],
    link: "https://www.icanread.mv",
    githubLink: false,
  },
  {
    id: 5,
    thumbnail: Spacepark.src,
    title: "Spacepark Feed",
    description:
      "This dynamic social media dashboard application is built using React and Tailwind CSS, ensuring a modern and responsive design. It leverages Google Firebase for robust authentication, providing secure user sign-up and login functionalities.The app features an intuitive and engaging Stories UI, allowing users to share and view time-limited content seamlessly. The sidebar and header components are designed for easy navigation, offering quick access to different sections of the dashboard With this app, users can manage their social media activities efficiently, enjoying a smooth and visually appealing user experience.",

    tools: [reactSvgLg, tailwindSvg, googleSvg, firebaseSvg],
    link: "https://github.com/aziz-codes/spacepark-feed-react",
    githubLink: true,
  },
  {
    id: 6,
    thumbnail: Instagram.src,
    title: "Instagram Clone",
    description:
      "This Instagram clone is built with Next.js, Tailwind CSS, Recoil, and Firebase, offering a fast and responsive user experience. The app features real-time updates, user authentication, and secure data storage powered by Firebase. With Recoil managing the global state, users can seamlessly navigate through the app, sharing photos, liking posts, and following other users, all within a beautifully designed interface.",
    tools: [nextjsSvg, tailwindSvg, googleSvg, firebaseSvg, recoilSvg],
    link: "https://github.com/aziz-codes/spacepark-feed-react",
    githubLink: true,
  },
];

export const projectFiles = [
  {
    label: "index.tsx",
    path: "/projects",
  },
  {
    label: "secure-eye.tsx",
    path: "/projects/1",
  },
  {
    label: "assignment-sol.tsx",
    path: "/projects/2",
  },
  {
    label: "wiserbee.tsx",
    path: "/projects/3",
  },
  {
    label: "icanread-mv.tsx",
    path: "/projects/4",
  },
  {
    label: "space-feed.tsx",
    path: "/projects/5",
  },
  {
    label: "insta-clone.tsx",
    path: "/projects/6",
  },
];
