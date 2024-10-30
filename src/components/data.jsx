
import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import img1 from "../assets/DResults.png";
import img2 from "../assets/CyberInfo.png";
import img3 from "../assets/ExerciseTracker.png";
import img4 from "../assets/dizzyfit.png";

import img5 from "../assets/fourtyTwoSignals.png"
import img6 from "../assets/jobSpikr.jpeg"
import img7 from "../assets/Promptcloud.png"

export const Education = [
  {
    id: 1,
    date: "2019 - 2023",
    iconsSrc: <IoCodeWorking />,
    title: "IIIT, RGUKTN",
    location: "Nuzvid, AP",
    gpa: 8.1,
    description: "BTech",
  },
  {
    id: 2,
    date: "2017 - 2019",
    iconsSrc: <IoCodeWorking />,
    title: "IIIT, RGUKTN",
    location: "Nuzvid, AP",
    gpa: 8.0,
    description: "Pre University Course",
  },
  {
    id: 3,
    date: "2017",
    iconsSrc: <IoCodeWorking />,
    title: "Municipal High School",
    location: "Mylavaram, AP",
    gpa: 10.0,
    description: "Matriculation",
  },
];

export const Projects = [
  {
    id: 1,
    name: "42 Signals",
    imageSrc: img5,
    techs: "React JS, Antd, Chartjs, Rails, Chart JS, Apex charts",
    github: "",
    url: "https://app.42signal.com",
  },
  {
    id: 2,
    name: "Jobspikr",
    imageSrc: img6,
    techs: "React Js",
    github: "",
    url: "https://app.jobspikr.com",
  },
  {
    id: 3,
    name: "Crawlboard",
    imageSrc: img7,
    techs: "React Js, React-bootstarp",
    github: "",
    url: "https://app.promptcloud.com",
  }
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link:"",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link:"",
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/8897759972",
  },
  {
    id: 5,
    iconSrc: (
      <IoMailOutline className="text-red-500 text-3xl cursor-pointer" />
    ),
    name: "E-Mail",
    link: "",
  },
];

export const Experiance = [
  {
    id: 1,
    date: "2022 - 2023",
    iconsSrc: <IoCodeWorking />,
    title: "SE-React (intern)",
    company:'PromptCloud',
    location: "Banglore (remote)",
    skills: ['React JS', 'Ruby on Rails', 'Git', 'Github', 'Jenkins', 'RSpec', 'Axios'],
  },
  {
    id: 2,
    date: "2023 - 2024",
    iconsSrc: <IoCodeWorking />,
    title: "Associate Software Engineer",
    company:'PromptCloud',
    location: "Banglore (remote)",
    skills: ['React JS', 'Ruby on Rails', 'Git', 'Github', 'Jenkins', 'RSpec', 'Axios'],
  },
  {
    id:3,
    date: "2024(Aug) - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Software Engineer 1",
    company:'PromptCloud',
    location: "Banglore (remote)",
    skills: ['React JS', 'Ruby on Rails', 'Git', 'SQL'],
  }
]