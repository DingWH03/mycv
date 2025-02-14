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
  birthDate: "2003-07-10",
  gender: "男",
  top_education: "本科",
  location: "安徽省合肥市",
  locationLink: "https://zh.wikipedia.org/wiki/%E5%90%88%E8%82%A5%E5%B8%82",
  about:
    "钻研，探索",
  summary:
    "合肥工业大学计算机科学与技术专业学生，擅长C++、Rust、Python和Java编程，熟悉Linux系统。参与过计算机图形学实验室项目，有深度学习研究经验。热爱编程，积极乐观，注重实践和动手能力的提升。",
  avatarUrl: "/images/avatar.jpg",
  personalWebsiteUrl: "https://me.cxhao.top",
  contact: {
    email: "dingwh2023@126.com",
    tel: "+8615556183656",
    github: "https://github.com/DingWH03",
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
      major: "计算机科学与技术",
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
      end: '2024-08',
      description: '参与图像去除多种退化方式的学习和研究。'
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
    {
      category: "编程语言",
      items: [
        { name: "C/C++", level: "熟练掌握C/C++，熟悉STL标准库，熟悉多线程编程、网络编程" },
        { name: "Rust", level: "掌握所有权、借用和生命周期核心思想，熟悉async/await异步编程及Rust并发模型" },
        { name: "Python", level: "熟练进行数据分析、自动化脚本、Web开发" },
        { name: "Java", level: "对Java语言较为了解，对面向对象思想十分熟悉" }
      ]
    },
    {
      category: "框架",
      items: [
        { name: "React", level: "熟练使用React进行组件化开发，掌握React Hooks、Redux状态管理" },
        { name: "Leptos", level: "熟悉Rust WebAssembly前端开发，掌握Leptos的信号机制、异步加载、SSR渲染" },
        { name: "Qt", level: "掌握Qt开发，熟悉Qt库，熟悉QtWidgets和QtQuick，能够构建跨平台GUI应用" },
        { name: "Tauri", level: "掌握Tauri的Rust后端与前端交互，熟悉WebView架构，能够开发轻量级跨平台应用" }
      ]
    },
    {
      category: "其他",
      items: [
        { name: "Linux", level: "熟悉Linux系统操作，掌握Shell脚本编写，能够进行服务器运维以及问题排查" },
        { name: "MySQL", level: "掌握MySQL数据库设计与优化，熟悉索引优化、事务机制、分库分表" },
        { name: "Git", level: "熟练使用Git工具，熟练掌握Git版本控制，了解CI/CD自动化部署" }
      ]
    }
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
      description: "HFUT数据结构课程设计，利用结巴分词实现单词翻译查找，利用 TrieTree 与 BPlusTree 实现英文查找",
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
      description: "HFUT Python语言与系统设计课程大作业，使用pyside6开发，基于网易云(曾)开源python api，实现了歌词显示及定位，使用面向对象思想，多线程支持",
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
    {
      title: "Risc-v CPU",
      techStack: [
        "SystemVerilog",
        "Risc-v",
        "Vivado",
        "Verilator",
      ],
      description: "HFUT系统硬件综合设计课程大作业，使用SystemVerilog语言编写Risc-v CPU，支持RV64I指令集与十级流水线",
      logo: ConsultlyLogo,
      link: {
        label: "RVCPU",
        href: "https://github.com/DingWH03/RVCPU",
      },
    },
    {
      title: "Web在线简历",
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
      ],
      description: "前端项目，基于国外开源项目修改而来，加入双语支持，修改页面布局，即本简历",
      logo: ConsultlyLogo,
      link: {
        label: "mycv",
        href: "https://github.com/DingWH03/mycv",
      },
    },
    {
      title: "Web导航",
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
      ],
      description: "前端项目，基于国外开源项目修改而来，加入搜索功能，用于索引常用网页",
      logo: ConsultlyLogo,
      link: {
        label: "home-nav",
        href: "https://github.com/DingWH03/home-nav",
      },
    },
  ],
} as const;

export const RESUME_DATA_en = {
  name: "Ding Weihao",
  initials: "DWH",
  birthDate: "2003-07-10",
  gender: "Male",
  top_education: "Undergraduate",
  location: "Hefei, Anhui Province",
  locationLink: "https://en.wikipedia.org/wiki/Hefei",
  about:
    "Explore, delve deep.",
  summary:
    "Computer Science and Technology student at Hefei University of Technology, proficient in C++, Rust, Python, and Java programming, familiar with Linux systems. Participated in computer graphics lab projects with experience in deep learning research. Passionate about programming, optimistic, and focused on practical skills and hands-on experience.",
  avatarUrl: "/images/avatar.jpg",
  personalWebsiteUrl: "https://me.cxhao.top",
  contact: {
    email: "dingwh2023@126.com",
    tel: "+8615556183656",
    github: "https://github.com/DingWH03",
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
      major: "Computer Science and Technology",
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
      end: '2024-08',
      description: 'Participated in learning and research on various degradation methods for image restoration.'
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
    {
      category: "Programming Languages",
      items: [
        { name: "C/C++", level: "Proficient in C/C++, familiar with STL standard library, experienced in multithreading and network programming" },
        { name: "Rust", level: "Understand core concepts of ownership, borrowing, and lifetimes, familiar with async/await asynchronous programming and Rust's concurrency model" },
        { name: "Python", level: "Skilled in data analysis, automation scripting, and web development" },
        { name: "Java", level: "Knowledgeable in Java, with a strong understanding of object-oriented programming principles" }
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", level: "Proficient in component-based development using React, experienced with React Hooks and Redux state management" },
        { name: "Leptos", level: "Familiar with Rust WebAssembly frontend development, understands Leptos's signaling mechanism, asynchronous loading, and SSR rendering" },
        { name: "Qt", level: "Skilled in Qt development, familiar with Qt libraries, QtWidgets, and QtQuick, capable of building cross-platform GUI applications" },
        { name: "Tauri", level: "Understands Tauri's Rust backend and frontend interaction, familiar with WebView architecture, capable of developing lightweight cross-platform applications" }
      ]
    },
    {
      category: "Others",
      items: [
        { name: "Linux", level: "Familiar with Linux system operations, skilled in Shell scripting, capable of server maintenance and troubleshooting" },
        { name: "MySQL", level: "Skilled in MySQL database design and optimization, familiar with index optimization, transaction mechanisms, and database sharding" },
        { name: "Git", level: "Proficient in using Git, skilled in version control with Git, understands CI/CD automated deployment" }
      ]
    }
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
      description: "HFUT Data Structure Course Design. Implemented word translation lookup using Jieba segmentation, and English word search using TrieTree and BPlusTree.",
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
      description: "HFUT Python Language and System Design Course Project. Developed using PySide6, based on NetEase Cloud's (formerly) open-source Python API. Implemented lyric display and positioning, utilizing object-oriented programming and multithreading support.",
      logo: ConsultlyLogo,
      link: {
        label: "Xiximusic",
        href: "https://github.com/DingWH03/Xiximusic",
      },
    },
    {
      title: "Lexical Analyzer",
      techStack: [
        "Rust",
        "Finite State Automaton",
      ],
      description: "HFUT Compiler Principles Course Experiment. A lexical analyzer written in Rust, outputting custom enum types. Currently capable of processing most statements.",
      logo: ConsultlyLogo,
      link: {
        label: "Lexer",
        href: "https://github.com/DingWH03/lexer",
      },
    },
    {
      title: "Risc-v CPU",
      techStack: [
        "SystemVerilog",
        "Risc-v",
        "Vivado",
        "Verilator",
      ],
      description: "HFUT System Hardware Comprehensive Design Course Project. A Risc-v CPU written in SystemVerilog, supporting the RV64I instruction set and ten-stage pipelining.",
      logo: ConsultlyLogo,
      link: {
        label: "RVCPU",
        href: "https://github.com/DingWH03/RVCPU",
      },
    },
    {
      title: "Web Online Resume",
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
      ],
      description: "Frontend project, modified from an open-source foreign project. Added bilingual support and adjusted page layout. This is the resume itself.",
      logo: ConsultlyLogo,
      link: {
        label: "mycv",
        href: "https://github.com/DingWH03/mycv",
      },
    },
    {
      title: "Web Navigation",
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
      ],
      description: "Frontend project, modified from an open-source foreign project. Added search functionality for indexing commonly used web pages.",
      logo: ConsultlyLogo,
      link: {
        label: "home-nav",
        href: "https://github.com/DingWH03/home-nav",
      },
    },
  ],
} as const;
