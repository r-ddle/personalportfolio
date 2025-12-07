import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Ahmed Abdullah",
  initials: "A.A",
  url: "https://r-ddle.dev/",
  location: "Colombo 09, Maradana, Sri Lanka",
  locationLink: "https://www.google.com/maps/place/colombo",
  description:
    "Front-end focused Web Developer building innovative web solutions with React and Next.js.",
  summary:
    "Front-end focused Web Developer with solid fundamentals in HTML, CSS and JavaScript, complemented by project experience with React and Next.js frameworks. Developed functional applications including a Full-Stack Ecommerce Site and SaaS Platform that demonstrate practical problem-solving abilities. I am seeking a position where I can further develop my technical skills and actively contribute to the creation of innovative web solutions.",
  avatarUrl: "/pfp.png",
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "ShadCN", "Electron"],
    backend: ["MongoDB", "Neon DB", "PHP", "Prisma ORM", "PayloadCMS", "Python", "C#", "Java"],
    tools: ["Git", "GitHub", "Photoshop", "Vercel", "Netlify", "Web Design"],
    softskills: ["Quick Learner", "Adaptable", "Team Collaboration"],
    languages: ["English (Fluent)", "Tamil (Native)"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://blog.r-ddle.dev", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ahmedonline.dev@gmail.com",
    tel: "+94772350712",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/r-ddle",
        icon: Icons.github,

        navbar: true,
      },
      linkedin: {
        label: "Ahmed Abdullah",
        url: "https://www.linkedin.com/in/r-ddle/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        label: "ahmedonline.dev@gmail.com",
        name: "Send Email",
        url: "mailto:ahmedonline.dev@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ralhum Sports",
      href: "https://ralhum.com/",
      badges: [],
      location: "Remote",
      title: "Trainee Digital Media Executive",
      logoUrl: "/ralhumlogo.svg",
      start: "June 2025",
      end: "Present",
      description:
        "Contributed to digital marketing and website building. Developed websites and e-commerce platforms using Next.js, TypeScript, as well as Shopify and WordPress prototypes. Transformed an outdated static site into a modern, scalable e-commerce web app with full shop cart, product verification, order processing, and order tracking capabilities.",
    },
  ],
  education: [
    {
      school: "ESOFT Metro Campus",
      href: "https://esoft.lk/",
      degree: "BTEC HND in Software Engineering",
      note: "Expected 2027",
      logoUrl: "/esoftlogo.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "ESOFT Metro Campus",
      href: "https://esoft.lk/",
      degree: "Diploma in Information Technology",
      note: "Graduated March 2025",
      logoUrl: "/esoftlogo.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "Scrimba",
      href: "https://scrimba.com",
      degree: "JavaScript Online Course",
      note: "",
      logoUrl: "/scrimba-logo.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "Zahira College Colombo",
      href: "",
      degree: "G.C.E (Ordinary Level - English Medium) Examination",
      note: "",
      logoUrl: "/zahiralogo.png",
      start: "2012",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Ralhum Sports E-Commerce",
      href: "https://ralhumsports.vercel.app",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Transformed an outdated static site into a modern, scalable e-commerce web app. Full E-Commerce Pipeline with shop cart, product verification, order processing, and order tracking. Advanced admin dashboard built with PayloadCMS for products/orders/brands/media/customer management with granular roles. Integrated PayHere payment gateway for Sri Lankan payments.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PayloadCMS",
        "PayHere",
        "TailwindCSS",
        "Prisma",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ralhumsports.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ralhumsportswebsite.png",
      video: "",
    },
    {
      title: "Ping-Pal: Fullstack SaaS Platform",
      href: "https://github.com/r-ddle/ping-pal",
      dates: "November 2024 - Present",
      active: true,
      description:
        "Developed a full-stack SaaS platform using Next.js, Prisma, Neon DB, and TypeScript, allowing users to set personalized event alerts delivered via Discord. Engineered a real-time notification system using webhooks and the Discord API, reducing user response time by 40%. Integrated REST APIs for data synchronization and third-party application compatibility.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Neon DB",
        "Prisma",
        "Discord API",
        "TailwindCSS",
        "Clerk Auth",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ping-pal-six.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pingpal.png",
      video: "",
    },
    {
      title: "Masjid Management System",
      href: "https://github.com/r-ddle/masjid-management-software",
      dates: "August 2024 - January 2025",
      active: false,
      description:
        "Developed a lightweight, installable desktop application using Electron, ensuring compatibility across multiple installations. Collaborated with a team to plan and efficiently execute the project. Implemented backend functionality using JavaScript and MongoDB, supporting efficient data management.",
      technologies: [
        "Electron",
        "JavaScript",
        "MongoDB",
        "TailwindCSS",
        "HTML/CSS",
        "Daisy UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/r-ddle/masjid-management-software",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/masjidcrudappdemo.png",
      video: "",
    },
    {
      title: "GOV.LK Website Redesign",
      href: "https://github.com/r-ddle/Sri-Lanka-Government-Website-Redesign",
      dates: "January 2025",
      active: true,
      description:
        "A redesign of the Sri Lankan Government Website. Personal passion project to improve my front-end skills plus fix the old site with all the clutter.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://govlk-reimagined.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/govlkredesign.png",
      video: "",
    },
  ],
  allprojects: [
    {
      title: "Simple Calculator App",
      dates: "May 27, 2024",
      description:
        "Calculator app made using Javascript after I made on in Python before.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/calculator-app",
        },
      ],
    },
    {
      title: "Diaper Store LK Design Solution",
      dates: "May 29, 2024",
      description:
        "A design solution for a diaper store in Sri Lanka to gain more customers.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/DiaperStoreLK-Design-Solution",
        },
      ],
    },
    {
      title: "FAQ Page",
      dates: "February 24, 2024",
      description: "Simple FAQ page made to test my front-end skills",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/faq-accordion-page",
        },
      ],
    },
    {
      title: "FlyxDevs Company Site",
      dates: "August 12, 2024",
      description: "The official FlyxDevs company site",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/flyxdevs-portfolio",
        },
      ],
    },
    {
      title: "Masjid Management App",
      dates: "August 08, 2024",
      description:
        "A fullstack software made for a masjid this is the web interface made using tailwind and js",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/masjid-management-webapp",
        },
      ],
    },
    {
      title: "Newsletter Signup Page",
      dates: "March 16, 2024",
      description: "Repository for Newsletter Signup Page.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/Newsletter-Signup-Page",
        },
      ],
    },
    {
      title: "ping-pal",
      dates: "November 06, 2024",
      description:
        "A fullstack web application made for devs to monitor events on their application using discord messages so you can always be up to date anywhere you are. Fully customizable for any event from bug to user-signup and more.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/ping-pal",
        },
      ],
    },
    {
      title: "Personal Portfolio",
      dates: "October 15, 2024",
      description:
        "A testing portfolio to improve my front-end skills with react and tailwind.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/portfolio",
        },
      ],
    },
    {
      title: "Portfolio Redesign",
      dates: "October 17, 2024",
      description:
        "Redoing my portfolio to improve my front-end skills with react and tailwind.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/portfolio-redesign",
        },
      ],
    },
    {
      title: "Masjid Management App",
      dates: "January 13, 2025",
      description:
        "A management app for masjids to manage members and payment details.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/masjid-management-software",
        },
      ],
    },
    {
      title: "Redesigning Sri Lankan Government Site",
      dates: "January 13, 2025",
      description:
        "A passion project to improve my front-end skills plus fix the old site with all the clutter.",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/r-ddle/Sri-Lanka-Government-Website-Redesign",
        },
      ],
    },
  ],
} as const;
