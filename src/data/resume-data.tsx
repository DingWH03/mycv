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
  location: "安徽五河",
  locationLink: "https://zh.wikipedia.org/wiki/%E4%BA%94%E6%B2%B3%E5%8E%BF",
  about:
    "钻研，探索",
  summary:
    "合肥工业大学计算机科学与技术专业学生，擅长C++、Rust、Python和Java编程，熟悉Linux系统。参与过计算机图形学实验室项目，有深度学习研究经验。热爱编程，积极乐观，注重实践和动手能力的提升。",
  avatarUrl: "/images/avatar.jpg",
  personalWebsiteUrl: "https://me.cxhao.top",
  target: "软件开发工程师",
  contact: {
    email: "DingVero@outlook.com",
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
      description: "在 C++ 程序设计、数据结构、编译原理及系统硬件（CPU 设计）等多门课程的课程设计中均取得优，同时担任“互联网＋”创新创业大赛组长，擅长团队管理和项目管理。",
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
  internship: [
    {
      company: "暂无实习经历",
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
      name: "Linux基础",
      level: "具备超过3年的Linux系统使用经验，精通Linux内核结构和驱动开发，曾成功移植mipi摄像头驱动并修改设备树配置。"
    },
    {
      name: "C/C++",
      level: "精通C/C++编程，能够独立开发高效的底层驱动和应用程序，熟悉STL标准库，掌握多线程和网络编程技术。"
    },
    {
      name: "Rust",
      level: "熟悉Rust语言核心概念，精通async/await异步编程与并发模型，能够使用Rust编写高性能的系统级程序。"
    },
    {
      name: "汇编语言",
      level: "精通RISC-V和ARM架构汇编语言，了解底层指令集，并熟悉嵌入式系统启动流程与硬件初始化。"
    },
    {
      name: "计算机网络",
      level: "深刻理解TCP/IP协议栈，能够独立开发网络应用程序，掌握网络安全与加密技术，熟悉基于IP的通信技术。"
    },
    {
      name: "嵌入式系统",
      level: "精通嵌入式系统原理，能够独立开发RISC-V和ARM架构的裸机程序、Linux系统或RTOS程序。"
    },
    {
      name: "硬件接口与通信协议",
      level: "熟悉I²C、SPI、UART、CAN、USB、以太网（PHY层）、SDIO等常用硬件接口协议，能够实现多种接口的通信。"
    },
    {
      name: "调试工具",
      level: "精通GDB、J-Link、OpenOCD调试工具，熟练使用逻辑分析仪和示波器进行硬件调试与故障排查。"
    },
    {
      name: "开发环境",
      level: "精通GCC、Clang交叉编译工具链，能够独立配置开发环境，熟练使用Makefile和CMake在Linux环境下构建项目。"
    },
    {
      name: "Git版本控制",
      level: "熟练使用Git进行版本管理，能够高效处理分支、合并、冲突解决和代码提交，熟悉Git Flow工作流。"
    }
  ],




  certifications: [
    {
      name: 'CET-6',
      description: "大学英语六级，成绩438分，具备较强的英语资料阅读与理解能力，能够流畅处理英文文献与技术资料。",
      issuer: '中华人民共和国教育部',
      date: '2023-12'
    }

  ],
  projects: [
    {
      title: "电子词典",
      techStack: [
        "C++",
        "Qt",
        "B+ Tree",
        "Trie Tree"
      ],
      description: "HFUT 数据结构课程设计项目，利用结巴分词实现单词翻译查找，采用 Trie Tree 和 B+ Tree 构建英文单词查找功能。",
      tasks: [
        "使用结巴分词实现单词翻译查找，提供高效的单词翻译和查找功能。",
        "利用 Trie Tree 和 B+ Tree 构建英文单词查找的核心数据结构，提升查找性能和内存效率。",
        "使用 Qt 设计图形用户界面（GUI），为用户提供直观、易用的界面，用于查找单词和查看翻译。",
        "优化查找算法和数据结构，确保快速查找并减少内存使用，能够处理大量单词数据。"
      ],
      achievements: "成功开发了一个高效的电子词典，具备快速查找和翻译功能。集成了结巴分词进行单词分割，并使用先进的数据结构进行性能优化。",
      gains: "通过该项目获得了 C++、Qt 以及高级数据结构（如 Trie Tree 和 B+ Tree）的实践经验，学习了如何实现高效的查找算法并优化应用性能。",
      logo: ConsultlyLogo,
      link: {
        label: "Qt-E-dict",
        href: "https://github.com/DingWH03/Qt-E-dict",
      },
    },


    {
      title: "uchat",
      techStack: [
        "Rust",
        "TCP",
        "异步",
        "MySQL"
      ],
      description: "Uchat 是一个基于 Rust 构建的实时通信应用，采用 TCP 协议实现客户端与服务器之间的通信，支持异步处理，并使用 MySQL 数据库进行数据存储。",
      tasks: [
        "使用 Rust 的 Axum 框架开发 RESTful API，为每个 API 编写 utoipa 文档，并实现基于用户角色的访问控制。",
        "使用 WebSocket 与客户端进行通信，采用 MPSC（多生产者单消费者）抽象线程通信，确保支持如 TCP 直连等其他实时通信协议的适配。",
        "将客户端 session 存储在 Redis 中，支持设置过期时间，并将持久化数据存储在 MySQL 数据库中。",
        "基于消息 ID 和事件驱动架构实现数据同步。"
      ],
      achievements: "成功构建了一个可扩展的实时消息系统，具有完善的 API 文档和安全的数据处理机制，支持未来通信协议的扩展。",
      gains: "通过此项目深入掌握了 Rust、Axum、WebSocket、Redis 和异步编程，提升了对实时数据同步和 API 设计的理解。",
      logo: ConsultlyLogo,
      link: {
        label: "uchat",
        href: "https://github.com/DingWH03/uchat",
      },
    }

  ],
} as const;

export const RESUME_DATA_en = {
  name: "Ding Weihao",
  initials: "DWH",
  birthDate: "2003-07-10",
  gender: "Male",
  top_education: "Undergraduate",
  location: "Wuhe, Anhui Province",
  locationLink: "https://en.wikipedia.org/wiki/Wuhe_County",
  about:
    "Explore, delve deep.",
  summary:
    "Computer Science and Technology student at Hefei University of Technology, proficient in C++, Rust, Python, and Java programming, familiar with Linux systems. Participated in computer graphics lab projects with experience in deep learning research. Passionate about programming, optimistic, and focused on practical skills and hands-on experience.",
  avatarUrl: "/images/avatar.jpg",
  personalWebsiteUrl: "https://me.cxhao.top",
  target: "Embedded Systems Development Engineer",
  contact: {
    email: "DingVero@outlook.com",
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
    // {
    //   company: "No work experience yet",
    //   link: "https://mycv.cxhap.top/",
    //   badges: ["?"],
    //   title: "No position yet",
    //   logo: ParabolLogo,
    //   start: "?",
    //   end: "?",
    //   description:
    //     "No work or internship experience yet.",
    // },
  ],
  internship: [
    // {
    //   company: "暂无实习经历",
    //   link: "https://mycv.cxhap.top/",
    //   badges: ["?"],
    //   title: "暂无职位",
    //   logo: ParabolLogo,
    //   start: "?",
    //   end: "?",
    //   description:
    //     "暂无工作与实习经历。",
    // },
  ],
  skills: [
    {
      name: "Linux Fundamentals",
      level: "Over 3 years of experience using Linux systems, proficient in Linux kernel structure and driver development, with successful porting of MIPI camera drivers and modification of device tree configurations."
    },
    {
      name: "C/C++",
      level: "Proficient in C/C++ programming, capable of developing efficient low-level drivers and applications, familiar with STL standard library, and skilled in multithreading and network programming techniques."
    },
    {
      name: "Rust",
      level: "Familiar with Rust language core concepts, proficient in async/await asynchronous programming and concurrency models, capable of writing high-performance system-level programs using Rust."
    },
    {
      name: "Assembly Language",
      level: "Proficient in RISC-V and ARM assembly languages, with a deep understanding of low-level instruction sets, and familiar with embedded system startup processes and hardware initialization."
    },
    {
      name: "Computer Networks",
      level: "In-depth understanding of TCP/IP protocol stack, capable of independently developing network applications, proficient in network security and encryption technologies, and familiar with IP-based communication technologies."
    },
    {
      name: "Embedded Systems",
      level: "Proficient in embedded system principles, capable of independently developing bare-metal programs for RISC-V and ARM architectures, as well as Linux or RTOS-based programs."
    },
    {
      name: "Hardware Interfaces & Communication Protocols",
      level: "Familiar with common hardware interface protocols like I²C, SPI, UART, CAN, USB, Ethernet (PHY layer), SDIO, and capable of implementing communication for various interfaces."
    },
    {
      name: "Debugging Tools",
      level: "Proficient in debugging tools such as GDB, J-Link, and OpenOCD, skilled in using logic analyzers and oscilloscopes for hardware debugging and fault analysis."
    },
    {
      name: "Development Environment",
      level: "Proficient in using GCC and Clang cross-compilation toolchains, capable of independently configuring development environments, and skilled in using Makefile and CMake for project builds in Linux environments."
    },
    {
      name: "Git Version Control",
      level: "Proficient in using Git for version control, capable of managing branches, handling merges and conflict resolution, and familiar with Git Flow workflows."
    }
  ],



  certifications: [
    {
      name: 'CET-6',
      description: "Scored 438 in the College English Test Band 6 (CET-6), with strong reading and comprehension skills in English, capable of handling academic and technical materials fluently.",
      issuer: 'Ministry of Education, PRC',
      date: 'December 2023'
    }

  ],
  projects: [
    {
      title: "Electronic Dictionary",
      techStack: [
        "C++",
        "Qt",
        "B+ Tree",
        "Trie Tree"
      ],
      description: "HFUT Data Structures course project. Implemented word translation and lookup using Jieba word segmentation, and built English word search functionality using Trie Tree and B+ Tree.",
      tasks: [
        "Implemented word translation lookup using Jieba word segmentation, enabling efficient translation and search for individual words.",
        "Developed the core data structures for English word search using Trie Tree and B+ Tree, improving lookup performance and memory efficiency.",
        "Designed the graphical user interface (GUI) using Qt to provide an intuitive and user-friendly interface for users to search words and view translations.",
        "Optimized search algorithms and data structures for fast lookup and minimal memory usage, handling a large number of words."
      ],
      achievements: "Successfully developed an efficient electronic dictionary with fast search and translation capabilities. Integrated Jieba for word segmentation and utilized advanced data structures for performance optimization.",
      gains: "Gained practical experience with C++, Qt, and advanced data structures such as Trie Tree and B+ Tree. Learned how to implement efficient search algorithms and improve application performance.",
      logo: ConsultlyLogo,
      link: {
        label: "Qt-E-dict",
        href: "https://github.com/DingWH03/Qt-E-dict",
      },
    },


    {
      title: "uchat",
      techStack: [
        "Rust",
        "TCP",
        "Async",
        "MySQL"
      ],
      description: "Uchat is a real-time communication application built with Rust. It uses the TCP protocol to establish communication between the client and server, supports asynchronous processing, and stores data in MySQL databases.",
      tasks: [
        "Developed RESTful APIs using the Rust Axum framework, created documentation for each API with utoipa, and implemented user role-based access control.",
        "Utilized WebSocket for communication with clients, abstracted thread communication using MPSC (Multi-Producer, Single-Consumer), and ensured flexibility to adapt to other real-time communication protocols such as direct TCP connections.",
        "Implemented session storage in Redis with configurable expiration times, and stored persistent data in MySQL databases.",
        "Synchronized data based on message IDs and an event-driven architecture."
      ],
      achievements: "Successfully built a scalable real-time messaging system with robust API documentation and secure data handling. Enabled easy extension for future communication protocols.",
      gains: "Gained hands-on experience with Rust, Axum, WebSocket, Redis, and asynchronous programming. Enhanced understanding of real-time data synchronization and API design.",
      logo: ConsultlyLogo,
      link: {
        label: "uchat",
        href: "https://github.com/DingWH03/uchat",
      },
    }

  ],
} as const;
