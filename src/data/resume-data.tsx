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
    // {
    //   organization: '大创项目',
    //   position: '项目负责人',
    //   start: '2020-01',
    //   end: '2020-12',
    //   description: '领导团队进行创新项目研究，负责项目规划与实施，获得省级优秀项目奖。'
    // },
    // 其他在校经历
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
    // 其他证书
  ],
  projects: [
    {
      title: "电子词典",
      techStack: [
        "C++",
        "Qt",
        "B+ Tree",
        "Trie Tree",
        // "GraphQL",
        // "WebRTC",
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
        // "B+ Tree",
        // "Trie Tree",
        // "GraphQL",
        // "WebRTC",
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
        // "B+ Tree",
        // "Trie Tree",
        // "GraphQL",
        // "WebRTC",
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
