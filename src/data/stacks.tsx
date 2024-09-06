import '../index.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaDocker } from "react-icons/fa";


export const frontEndStacks = [
  {
    name: 'react',
    component: <FaReact className="stack-icon" />,
  },
  {
    name: 'javascript',
    component: <SiJavascript className="stack-icon" />,
  },
  {
    name: 'html',
    component: <FaHtml5 className="stack-icon" />,
  },
  {
    name: 'css',
    component: <FaCss3Alt className="stack-icon" />,
  },
  {
    name: 'sass',
    component: <FaSass className="stack-icon" />,
  },
  {
    name: 'mui',
    component: <SiMui className="stack-icon" />,
  },
  {
    name: 'chakra ui',
    component: <SiChakraui className="stack-icon" />,
  },
  {
    name: 'bootstrap',
    component: <FaBootstrap className="stack-icon" />,
  },
  {
    name: 'tailwind css',
    component: <SiTailwindcss className="stack-icon" />,
  }
];

export const backEndStacks = [
  {
    name: 'typescript',
    component: <SiTypescript className="stack-icon" />,
  },
  {
    name: 'node.js',
    component: <FaNode className="stack-icon" />,
  },
  {
    name: 'express',
    component: <SiExpress className="stack-icon" />,
  },
  {
    name: 'postgresql',
    component: <BiLogoPostgresql className="stack-icon" />,
  },
  {
    name: 'next.js',
    component: <SiNextdotjs className="stack-icon" />,
  },
  {
    name: 'prisma',
    component: <SiPrisma className="stack-icon" />
  }
];

export const otherStacks = [
  {
    name: 'npm',
    component: <FaNpm className="stack-icon" />,
  },
  {
    name: 'git',
    component: <FaGitAlt className="stack-icon" />
  },
  {
    name: 'github',
    component: <FaGithub className="stack-icon" />,
  },
  {
    name: 'postman',
    component: <SiPostman className="stack-icon" />,
  },
  {
    name: 'figma',
    component: <FaFigma className="stack-icon" />
  },
  {
    name: 'canva',
    component: <SiCanva className="stack-icon" />
  },
  {
    name: 'vercel',
    component: <IoLogoVercel className="stack-icon" />
  },
  {
    name: 'jira',
    component: <SiJira className="stack-icon" />
  },
  {
    name: 'docker',
    component: <FaDocker className="stack-icon" />
  },
];