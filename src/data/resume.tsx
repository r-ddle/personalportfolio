import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Ahmed",
  initials: "A.A",
  url: "https://r-ddle.me/",
  location: "Sri Lanka, Colombo",
  locationLink: "https://www.google.com/maps/place/srilanka",
  description:
    "I'm a Web Developer, who loves to build smooth and clean websites for better user experience.",
  summary:
    "My first language was Python. I started to learn it in 2022 for a few months then learned about a website called carrds which made me love designing beautiful sites for myself and other people, and thats basically how i became a web developer.",
  avatarUrl: "",
  skills: [
    "HTML",
    "CSS",
    "Tailwind",
    "React",
    "MongoDB",
    "ShadCN",
    "Next.js",
    "C#",
    "SQL",
    "Python",
    "Netlify/Vercel",
    "Github",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      discord: {
        label: "r.ddle",
        navbar: false,
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

  //   work: [
  //     {
  //       company: "",
  //       href: "",
  //       badges: [],
  //       location: "",
  //       title: "",
  //       logoUrl: "",
  //       start: "",
  //       end: "",
  //       description:
  //         "",
  //     },
  //   ],
  education: [
    {
      school: "ESOFT Metro Campus (In Progress)",
      href: "https://esoft.lk/",
      degree: "Level 5 Pearson BTEC HND in Software Engineering",
      note: "",
      logoUrl: "/esoftlogo.png",
      start: "Feb, 2024",
      end: "Jan, 2027",
    },
    {
      school: "ESOFT Metro Campus",
      href: "https://esoft.lk/",
      degree: "Diploma in General IT",
      note: "",
      logoUrl: "/esoftlogo.png",
      start: "Feb, 2024",
      end: "Nov, 2024",
    },
    {
      school: "Sat For G.C.E. (Ordinary Level- English Medium) Examination",
      href: "",
      degree: "G.C.E O/L",
      note: "",
      logoUrl: "/zahiralogo.png",
      start: "Jan, 2012",
      end: "Jan, 2023",
    },
  ],
  projects: [
    {
      title: "Ping Pal",
      href: "https://github.com/r-ddle/ping-pal",
      dates: "Testing | Curently Active",
      active: true,
      description:
        "A fullstack web application for developers to monitor events on their application using discord messages so you can always be up to date anywhere you are. Fully customizable for any event from bug to user-signup and more.",
      technologies: [
        "Next.js",
        "Typescript",
        "Neon",
        "Prisma",
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
      title: "Flyx Devs",
      href: "https://github.com/r-ddle/flyxdevs-portfolio",
      dates: "Limited Updates | Fixing Bugs",
      active: true,
      description:
        "A company website made for Flyx Devs (owned by me) for consumers to contact and purchase beautiful websites made by me. Currently not working on, focusing on other projects but will be back soon.",
      technologies: ["React", "Javascript", "TailwindCSS", "Preline UI"],
      links: [
        {
          type: "Website",
          href: "https://flyxdevs.live",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/flyxdevs.png",
      video: "",
    },
    {
      title: "Masjid Management App",
      href: "",
      dates: "Completed",
      active: false,
      description:
        "A desktop application made for masjids to manage members, payment details and more.",
      technologies: [
        "Electron",
        "Javascript",
        "TailwindCSS",
        "MongoDB",
        "HTML/CSS",
        "Daisy UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/masjidcrudappdemo.png",
      video: "",
    },
    {
      title: "Sri Lanka Government Website Redesign",
      href: "https://github.com/r-ddle/Sri-Lanka-Government-Website-Redesign",
      dates: "Completed",
      active: true,
      description:
        "A redesign of the Sri Lankan Government Website. A passion project to improve my front-end skills plus fix the old site with all the clutter.",
      technologies: [
        "React",
        "NextJS",
        "Typescript",
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
  hackathons: [
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
