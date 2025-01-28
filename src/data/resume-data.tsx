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
  birthDate: "2003-05-10",
  gender: "男",
  top_education: "本科",
  location: "安徽省合肥市",
  locationLink: "https://zh.wikipedia.org/wiki/%E5%90%88%E8%82%A5%E5%B8%82",
  about:
    "一个热爱编程、热爱linux的在校大学生。",
  summary:
    "合肥工业大学计算机科学与技术专业学生，擅长C++、Rust、Python和Java编程，熟悉Linux系统。参与过计算机图形学实验室项目，有深度学习研究经验。热爱编程，积极乐观，注重实践和动手能力的提升。",
  avatarUrl: "/images/avatar.jpg",
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
      end: '2026-06?',
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
        { name: "Qt", level: "掌握Qt开发，熟悉QtWidgets和QtQuick，能够构建跨平台GUI应用" },
        { name: "Tauri", level: "掌握Tauri的Rust后端与前端交互，熟悉WebView架构，能够开发轻量级跨平台应用" }
      ]
    },
    {
      category: "其他",
      items: [
        { name: "Linux", level: "熟悉Linux系统操作，掌握Shell脚本编写，能够进行服务器运维与性能调优" },
        { name: "MySQL", level: "掌握MySQL数据库设计与优化，熟悉索引优化、事务机制、分库分表" },
        { name: "Docker", level: "熟练使用Docker进行容器化部署，掌握Docker Compose、K8s集群管理" },
        { name: "Git", level: "熟练掌握Git版本控制，了解Git Flow工作流，熟悉CI/CD自动化部署" }
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
  birthDate: "2003-05-10",
  gender: "Male",
  top_education: "Undergraduate",
  location: "Hefei, Anhui Province",
  locationLink: "https://en.wikipedia.org/wiki/Hefei",
  about:
    "A university student who loves programming and Linux.",
  summary:
    "Computer Science and Technology student at Hefei University of Technology, proficient in C++, Rust, Python, and Java programming, familiar with Linux systems. Participated in computer graphics lab projects with experience in deep learning research. Passionate about programming, optimistic, and focused on practical skills and hands-on experience.",
  avatarUrl: "/images/avatar.jpg",
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
      end: '2026-06?',
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
      "category": "Programming Languages",
      "items": [
        { "name": "C/C++", "level": "Proficient in C/C++, STL, multithreading, and network programming" },
        { "name": "Rust", "level": "Strong understanding of ownership, borrowing, lifetimes, async/await, and concurrency" },
        { "name": "Python", "level": "Skilled in data analysis, scripting, and web development" },
        { "name": "Java", "level": "Good grasp of Java and object-oriented programming" }
      ]
    },
    {
      "category": "Frontend Frameworks",
      "items": [
        { "name": "React", "level": "Experienced in component-based development, React Hooks, and Redux" },
        { "name": "Leptos", "level": "Familiar with Rust WebAssembly, signals, async loading, and SSR" },
        { "name": "Qt", "level": "Proficient in QtWidgets and QtQuick for cross-platform GUI development" },
        { "name": "Tauri", "level": "Experienced in Rust backend and WebView-based cross-platform apps" }
      ]
    },
    {
      "category": "Others",
      "items": [
        { "name": "Linux", "level": "Skilled in Linux operations, Shell scripting, and server optimization" },
        { "name": "MySQL", "level": "Proficient in database design, optimization, and sharding" },
        { "name": "Docker", "level": "Experienced with containerization, Docker Compose, and Kubernetes" },
        { "name": "Git", "level": "Skilled in version control, Git Flow, and CI/CD pipelines" }
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
