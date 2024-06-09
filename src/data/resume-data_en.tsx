import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, QQIcon } from "@/components/icons";

export const RESUME_DATA_en = {
  name: "Ding Weihao",
  initials: "DWH",
  location: "Hefei, Anhui Province",
  locationLink: "https://en.wikipedia.org/wiki/Hefei",
  about:
    "A university student who loves programming and Linux.",
  summary:
    "I am majoring in Computer Science and Technology at Hefei University of Technology. I have a strong interest in operating systems and embedded devices, with a foundation in programming languages such as C++, Rust, Python, and Java. Proficient in Linux, I have participated in the Computer Graphics Laboratory and conducted research and study in deep learning. I am passionate about programming, have a deep interest in computers, enjoy learning widely, am optimistic, love trying new things, and constantly strive to improve my hands-on abilities.",
  avatarUrl: "/images/avatar.png",
  personalWebsiteUrl: "https://me.cxhao.top",
  contact: {
    email: "dingwh2023@126.com",
    tel: "+8615556183656",
    social: [
      {
        name: "QQ",
        url: "https://qm.qq.com/q/uKtRSqdDI6",
        icon: QQIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/DingWH03",
        icon: GitHubIcon,
      },
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/bjarocki/",
      //   icon: LinkedInIcon,
      // },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Hefei University of Technology",
      degree: "Undergraduate",
      start: "2022",
      end: "2026",
    },
  ],
  campusActivities: [
    {
      organization: 'Multimedia Laboratory, School of Computer Science',
      department: '',
      topic: '',
      position: '',
      start: '2023-08',
      end: '2026-06?',
      description: 'Participated in learning and research on various degradation methods for image restoration.'
    },
    {
      organization: 'School Academic Development Center',
      department: 'Academic Development Service Team',
      topic: '',
      position: 'Staff',
      start: '2022-08',
      end: '2023-12',
      description: 'Responsible for coordinating academic assistance activities and participating in office duty.'
    },
    // {
    //   organization: '大创项目',
    //   position: '项目负责人',
    //   start: '2020-01',
    //   end: '2020-12',
    //   description: '领导团队进行创新项目研究，负责项目规划与实施，获得省级优秀项目奖。'
    // },
    // Other campus activities
  ],
  work: [
    {
      company: "No work experience yet",
      link: "https://mycv.cxhap.top/",
      badges: ["?"],
      title: "No position yet",
      logo: ParabolLogo,
      start: "?",
      end: "?",
      description:
        "No work or internship experience yet.",
    },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    { name: "Linux", level: 70 },
    { name: "C/C++", level: 70 },
    { name: "Rust", level: 60 },
    { name: "Python", level: 75 },
    { name: "Java", level: 60 },
    { name: "Qt/PyQt", level: 70 },
    { name: "SQL", level: 70 },
    { name: "Shell", level: 70 },
    { name: "Git", level: 70 },
  ],
  certifications: [
    { name: 'CET-6', issuer: 'Ministry of Education, PRC', date: '2023-12' },
    // { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', date: '2021-11' },
    // Other certifications
  ],
  projects: [
    {
      title: "Electronic Dictionary",
      techStack: [
        "C++",
        "Qt",
        "B+ Tree",
        "Trie Tree",
        // "GraphQL",
        // "WebRTC",
      ],
      description: "Utilizes Jieba word segmentation for word translation lookup, and TrieTree and BPlusTree for English lookup.",
      logo: ConsultlyLogo,
      link: {
        label: "Qt-E-dict",
        href: "https://github.com/DingWH03/Qt-E-dict",
      },
    },
    {
      title: "Music Player",
      techStack: [
        "Python",
        "PyQt",
        // "B+ Tree",
        // "Trie Tree",
        // "GraphQL",
        // "WebRTC",
      ],
      description: "A PySide6-developed NeteaseCloudMusic third-party client that uses the NeteaseCloudMusic_PythonSDK, HFUT Python Language and System Design Course Project",
      logo: ConsultlyLogo,
      link: {
        label: "Xiximusic",
        href: "https://github.com/DingWH03/Xiximusic",
      },
    },
    {
      title: "Lexer",
      techStack: [
        "Rust",
        "Finite State Automaton",
// "B+ Tree",
// "Trie Tree",
// "GraphQL",
// "WebRTC",
],
description: "Lexer for HFUT Compiler Principles course experiment, written in Rust, outputting custom enumeration types, currently capable of handling most statements.",
logo: ConsultlyLogo,
link: {
label: "Lexer",
href: "https://github.com/DingWH03/lexer",
},
},
],
} as const;
