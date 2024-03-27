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

export const frontEndStacks = [
  {
    name: 'html',
    component: <FaHtml5 />,
  },
  {
    name: 'css',
    component: <FaCss3Alt />,
  },
  {
    name: 'javascript',
    component: <SiJavascript />,
  },
  {
    name: 'sass',
    component: <FaSass />,
  },
  {
    name: 'react',
    component: <FaReact />,
  },
  {
    name: 'mui',
    component: <SiMui />,
  },
  {
    name: 'chakra ui',
    component: <SiChakraui />,
  },
  {
    name: 'bootstrap',
    component: <FaBootstrap />,
  },
];

export const backEndStacks = [
  {
    name: 'nodejs',
    component: <FaNode />,
  },
  {
    name: 'express',
    component: <SiExpress />,
  },
  {
    name: 'postgresql',
    component: <BiLogoPostgresql />,
  },
  {
    name: 'typescript',
    component: <SiTypescript />,
  },
];

export const otherStacks = [
  {
    name: 'npm',
    component: <FaNpm />,
  },
  {
    name: 'github',
    component: <FaGithub />,
  },
  {
    name: 'postman',
    component: <SiPostman />,
  },
];