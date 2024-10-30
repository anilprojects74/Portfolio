import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  import img1 from "../assets/DResults.png";
  import img2 from "../assets/CyberInfo.png";
  import img3 from "../assets/ExerciseTracker.png";
  import img4 from "../assets/pngwing.com.png";
  import img5 from "../assets/pngwing.com.png";
  import img6 from "../assets/pngwing.com.png";
  
  export const Education = [
    {
      id: 1,
      date: "2019 - present",
      iconsSrc: <IoCodeWorking />,
      title: "IIIT, RGUKTN",
      location: "Nuzvid, AP",
      gpa:8.1,
      description:
        "BTech",
    },
    {
      id: 2,
      date: "2017 - 2019",
      iconsSrc: <IoCodeWorking />,
      title: "IIIT, RGUKTN",
      location: "Nuzvid, AP",
      gpa:8.0,
      description:
        "Pre University Course",
    },
    {
      id: 3,
      date: "2017",
      iconsSrc: <IoCodeWorking />,
      title: "Municipal High School",
      location: "Repalle, AP",
      gpa:10.0,
      description:
        "Matriculation",
    },
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "Decentralized Results",
      imageSrc: img1,
      techs: "React Js, IPFS, Ethers Js, Hardhat, Tailwind CSS",
      github: "https://github.com/Dare-devil-23/DResults",
      url:"",
    },
    {
      id: 2,
      name: "CyberInfo",
      imageSrc: img2,
      techs: "React Js",
      github: "https://github.com/Dare-devil-23/cyber",
      url:"",
    },
    {
      id: 3,
      name: "MERN Stack Exercise Tracking Application",
      imageSrc: img3,
      techs: "MongoDB, Express Js, React Js, Node Js",
      github: "https://github.com/Dare-devil-23/Exercise-Tracker",
      url:"",
    },
    {
      id: 4,
      name: "Pintrest UI Clone 2.0 ",
      imageSrc: img4,
      techs: "React Js,  Material UI",
      github: "#",
      url:"",
    },
    {
      id: 5,
      name: "Own Video Blog",
      imageSrc: img5,
      techs: "React Js, Chara UI, Firebase",
      github: "#",
      url:"",
    },
    {
      id: 6,
      name: "Whatsapp UI Clone",
      imageSrc: img6,
      techs: "NextJs, Firebase Auth",
      github: "#",
      url:"",
    },
  ];
  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/Dare-devil-23",
    },
    {
      id: 2,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/Sahith9866",
    },
    {
      id: 3,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sai-sahith-56a750244/",
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "https://wa.me/7989575626",
    },
  ];