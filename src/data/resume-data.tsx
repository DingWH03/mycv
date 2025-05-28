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
import { Description } from "@radix-ui/react-dialog";

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
  target: "嵌入式系统开发工程师",
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
      description: "在 C++ 程序设计、数据结构、编译原理及系统硬件（CPU 设计）等多门课程的课程设计中均取得优异成绩，同时担任“互联网＋”创新创业大赛组长，擅长团队管理和项目管理。",
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
      { name: "C/C++", level: "精通 C/C++，能独立开发高效的底层驱动与应用程序，熟悉 STL 标准库，掌握多线程与网络编程" },
      { name: "Rust", level: "熟悉 Rust 核心概念，掌握 async/await 异步编程与并发模型，能使用 Rust 编写高性能系统级程序" },
      { name: "汇编语言", level: "熟悉汇编语言，了解底层指令集与嵌入式系统启动流程" }
    ]
  },
  {
    category: "开发",
    items: [
      { name: "操作系统", level: "精通 Linux 内核架构与驱动开发，能独立移植与调试 RTOS（如 FreeRTOS、RT-Thread）至目标硬件平台" },
      { name: "计算机网络", level: "熟悉 TCP/IP 协议栈，能独立实现网络应用程序，了解网络安全与加密技术，实现基于ip的通信技术" },
      { name: "嵌入式系统", level: "精通嵌入式系统原理，能独立开发 RISC-V 与 ARM 裸机程序、Linux 系统或 RTOS 程序" },
      { name: "硬件接口与通信协议", level: "熟悉 I²C、SPI、UART、CAN、USB、以太网（PHY 层）、SDIO 等常用接口协议。" },
      { name: "调试工具", level: "精通 GDB、J-Link、OpenOCD 调试，熟练操作逻辑分析仪和示波器进行硬件调试" },
      { name: "开发环境", level: "精通 GCC、Clang 交叉编译工具链，能独立配置开发环境，熟练使用 Makefile 和 CMake 构建嵌入式项目" }
    ]
  },
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
      title: "arch-img-builder",
      techStack: [
        "Shell",
        "CI/CD",
      ],
      description: "自动化构建Arch Linux镜像的工具，使用Shell脚本和CI/CD流程，自动编译kernel、uboot、opensbi与rootfs，生成可用于烧录的镜像文件",
      logo: ConsultlyLogo,
      link: {
        label: "arch-img-builder",
        href: "https://github.com/DingWH03/arch-img-builder",
      },
    },
    {
      title: "uchat",
      techStack: [
        "rust",
        "tcp",
        "async",
        "mysql"
      ],
      description: "基于rust的聊天应用，使用TCP协议实现客户端与服务器端的通信，支持异步处理和MySQL数据库存储",
      logo: ConsultlyLogo,
      link: {
        label: "uchat",
        href: "https://github.com/DingWH03/uchat",
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
  target: "Embedded Systems Development Engineer",
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
      description: "Achieved excellent results in course projects for C++ Programming, Data Structures, Compiler Principles, and System Hardware (CPU Design); served as the Entrepreneurship Team Leader in the “Internet+” Competition, excelling in team management and project management.",
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
      { name: "C/C++", level: "Proficient in C/C++, capable of independently developing efficient low-level drivers and applications, familiar with the STL standard library, and skilled in multithreading and network programming." },
      { name: "Rust", level: "Familiar with core Rust concepts, adept in async/await asynchronous programming and concurrency models, able to develop high-performance system-level programs using Rust." },
      { name: "Assembly Language", level: "Familiar with assembly language, understanding low-level instruction sets and embedded system boot processes." }
    ]
  },
  {
    category: "Development",
    items: [
      { name: "Operating Systems", level: "Proficient in Linux kernel architecture and driver development, capable of independently porting and debugging RTOS (such as FreeRTOS, RT-Thread) on target hardware platforms." },
      { name: "Computer Networks", level: "Familiar with TCP/IP protocol stack, capable of independently implementing network applications, understanding network security and encryption techniques, and developing IP-based communication technologies." },
      { name: "Embedded Systems", level: "Proficient in embedded system principles, capable of independently developing RISC-V and ARM bare-metal programs, Linux-based systems, and RTOS-based applications." },
      { name: "Hardware Interfaces and Communication Protocols", level: "Familiar with common interfaces such as I²C, SPI, UART, CAN, USB, Ethernet (PHY layer), and SDIO." },
      { name: "Debugging Tools", level: "Proficient in using GDB, J-Link, and OpenOCD for debugging, skilled in operating logic analyzers and oscilloscopes for hardware debugging." },
      { name: "Development Environment", level: "Proficient in using GCC and Clang cross-compilation toolchains, capable of independently configuring development environments, and familiar with building embedded projects using Makefile and CMake." }
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
  title: "arch-img-builder",
  techStack: [
    "Shell",
    "CI/CD"
  ],
  description: "An automated Arch Linux image builder that uses Shell scripts and CI/CD pipelines to compile the kernel, U-Boot, OpenSBI, and rootfs, and generates flashable image files.",
  logo: ConsultlyLogo,
  link: {
    label: "arch-img-builder",
    href: "https://github.com/DingWH03/arch-img-builder"
  }
},
{
  title: "uchat",
  techStack: [
    "Rust",
    "TCP",
    "Async",
    "MySQL"
  ],
  description: "A chat application built with Rust, using the TCP protocol for client-server communication. It supports asynchronous processing and stores data in a MySQL database.",
  logo: ConsultlyLogo,
  link: {
    label: "uchat",
    href: "https://github.com/DingWH03/uchat"
  }
}
  ],
} as const;
