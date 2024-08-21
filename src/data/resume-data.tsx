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

export const RESUME_DATA = {
  name: "丁伟豪",
  initials: "DWH",
  location: "安徽省合肥市",
  locationLink: "https://zh.wikipedia.org/wiki/%E5%90%88%E8%82%A5%E5%B8%82",
  about:
    "一个热爱编程、热爱linux的在校大学生。",
  summary:
    "合肥工业大学计算机科学与技术专业学生，擅长C++、Rust、Python和Java编程，熟悉Linux系统。参与过计算机图形学实验室项目，有深度学习研究经验。热爱编程，积极乐观，注重实践和动手能力的提升。",
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
    ],
  },
  education: [
    {
      school: "合肥工业大学",
      degree: "本科生",
      start: "2022",
      end: "2026",
    },
  ],
  campusActivities: [
    {
      organization: '计算机学院多媒体实验室',
      department: '',
      topic: '',
      position: '',
      start: '2023-08',
      end: '2026-06?',
      description: '参与图像去除多种退化方式的学习和研究。'
    },
    {
      organization: '校学业发展中心',
      department: '学业发展服务队',
      topic: '',
      position: '干事',
      start: '2022-08',
      end: '2023-12',
      description: '负责协同开展学业帮扶活动，并且参与办公室值班。'
    },
  ],
  work: [
    {
      company: "暂无工作经历",
      link: "https://mycv.cxhap.top/",
      badges: ["?"],
      title: "暂无职位",
      logo: ParabolLogo,
      start: "?",
      end: "?",
      description:
        "暂无工作与实习经历。",
    },
  ],
  skills: [
    { name: "C/C++", level: 70, category: "编程语言" },
    { name: "Rust", level: 60, category: "编程语言" },
    { name: "Python", level: 75, category: "编程语言" },
    { name: "Java", level: 60, category: "编程语言" },
    { name: "JavaScript", level: 65, category: "Web开发" },
    { name: "React", level: 60, category: "Web开发" },
    { name: "HTML/CSS", level: 70, category: "Web开发" },
    { name: "Node.js", level: 60, category: "Web开发" },
    { name: "Qt/PyQt", level: 70, category: "框架与库" },
    { name: "SQL", level: 70, category: "数据库" },
    { name: "Git", level: 70, category: "版本控制" },
    { name: "Docker", level: 65, category: "DevOps与工具" },
    { name: "Kubernetes", level: 60, category: "DevOps与工具" },
    { name: "Linux运维", level: 70, category: "操作系统" },
    { name: "Linux内核", level: 40, category: "操作系统" },
    { name: "Linux编程", level: 50, category: "操作系统" },

  ],  
  certifications: [
    { name: 'CET-6', issuer: 'Ministry of Education, PRC', date: '2023-12' },
  ],
  projects: [
    {
      title: "电子词典",
      techStack: [
        "C++",
        "Qt",
        "B+ Tree",
        "Trie Tree",
      ],
      description: "利用结巴分词实现单词翻译查找，利用 TrieTree 与 BPlusTree 实现英文查找",
      logo: ConsultlyLogo,
      link: {
        label: "Qt-E-dict",
        href: "https://github.com/DingWH03/Qt-E-dict",
      },
    },
    {
      title: "音乐播放器",
      techStack: [
        "Python",
        "PyQt",
      ],
      description: "一个pyside6开发的网易云音乐第三方客户端，使用了NeteaseCloudMusic_PythonSDK，HFUT Python语言与系统设计课程大作业",
      logo: ConsultlyLogo,
      link: {
        label: "Xiximusic",
        href: "https://github.com/DingWH03/Xiximusic",
      },
    },
    {
      title: "词法分析器",
      techStack: [
        "Rust",
        "有限状态自动机",
      ],
      description: "HFUT编译原理课程实验词法分析器，使用rust语言编写，输出自定义的枚举类型，目前可处理绝大多数语句",
      logo: ConsultlyLogo,
      link: {
        label: "Lexer",
        href: "https://github.com/DingWH03/lexer",
      },
    },
  ],
} as const;

export const RESUME_DATA_en = {
  name: "Ding Weihao",
  initials: "DWH",
  location: "Hefei, Anhui Province",
  locationLink: "https://en.wikipedia.org/wiki/Hefei",
  about:
    "A university student who loves programming and Linux.",
  summary:
    "Computer Science and Technology student at Hefei University of Technology, proficient in C++, Rust, Python, and Java programming, familiar with Linux systems. Participated in computer graphics lab projects with experience in deep learning research. Passionate about programming, optimistic, and focused on practical skills and hands-on experience.",
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
  ],
  skills: [
    { name: "C/C++", level: 70, category: "Programming Languages" },
    { name: "Rust", level: 60, category: "Programming Languages" },
    { name: "Python", level: 75, category: "Programming Languages" },
    { name: "Java", level: 60, category: "Programming Languages" },
    { name: "JavaScript", level: 65, category: "Web Development" },
    { name: "React", level: 60, category: "Web Development" },
    { name: "HTML/CSS", level: 70, category: "Web Development" },
    { name: "Node.js", level: 60, category: "Web Development" },
    { name: "Qt/PyQt", level: 70, category: "Frameworks & Libraries" },
    { name: "SQL", level: 70, category: "Databases" },
    { name: "Git", level: 70, category: "Version Control" },
    { name: "Docker", level: 65, category: "DevOps & Tools" },
    { name: "Kubernetes", level: 60, category: "DevOps & Tools" },
    { name: "Operations", level: 70, category: "Linux Operating Systems" },
    { name: "Kernel", level: 40, category: "Linux Operating Systems" },
    { name: "Coding", level: 50, category: "Linux Operating Systems" },
  ],
  
  certifications: [
    { name: 'CET-6', issuer: 'Ministry of Education, PRC', date: '2023-12' },
  ],
  projects: [
    {
      title: "Electronic Dictionary",
      techStack: [
        "C++",
        "Qt",
        "B+ Tree",
        "Trie Tree",
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
