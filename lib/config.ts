export const CONFIG = {

  MAINPROJECTS: [
    {
      title: "Marill ROV",
      description: "Unmanned Underwater Vehicle",
      role: "Electronic Technician & Software Developer",
      what: "Marill is an UUV made for Teknofest 2022 to reach deep in sea without human activity.",
      img: "/projects/marill.jpeg",
      linkto: "https://marill.tech"
    },
    {
      title: "To-Do List",
      description: "A minimalist to-do list made with react.",
      role: "Developer",
      what: "Compact, beautiful and useful. Everything you need from a to-do list.",
      img: "/projects/todo.png",
      linkto: "https://todo.draxya.com"
    },
    {
      title: "Discord.JS",
      description: "Powerful Node.js module that allows you to interact with the Discord API easily.",
      role: "Contributor",
      what: "Usability, consistency, and performance are key focuses of discord.js, and it also has nearly 100% coverage of the Discord API.",
      img: "/projects/discordjs.png",
      linkto: "https://github.com/discordjs/discord.js"
    }
  ] as MAINPROJECTS[],

  SIDEPROJECTS: [
    {
      title: "POT",
      description: "A lightweight, fast and reliable programming language.",
      img: "/projects/pot-banner.png",
      linkto: "/soon",
      view: "/soon",
      mode: "1"
    },
    {
      title: "Aesir Minecraft",
      description: "The new breath of medieval RPG experience.",
      img: "/projects/aesirmc.png",
      linkto: "https://wiki.aesirmc.com/",
      view: "https://aesirmc.com",
      mode: "1"
    }
  ] as SIDEPROJECTS[],
};

interface MAINPROJECTS {
  title: string;
  description: string;
  role: string;
  what: string;
  img: string;
  linkto: string;
}

interface SIDEPROJECTS {
  title: string;
  description: string;
  img: string;
  linkto: any;
  view: string;
  mode: string;
}
