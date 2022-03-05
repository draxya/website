export const CONFIG = {

  MAINPROJECTS: [
    {
      title: "Marill ROV",
      description: "Unmanned Underwater Vehicle",
      role: "Team Member & Software Developer",
      what: "Marill is an UUV made for Teknofest 2022 to reach deep in sea without human activity.",
      img: "/projects/marill.jpeg",
      linkto: "https://github.com/Marill-ROV"
    },
    {
      title: "Jutul",
      description: "A Discord bot for moderation and fun",
      role: "Founder & Developer",
      what: "I started making of Jutul back in 2020 and still developinng it.",
      img: "/projects/jutul.webp",
      linkto: "https://top.gg/tr/bot/759823414042034178"
    },
    {
      title: "Jutul Music",
      description: "Jutul's following project with music commands",
      role: "Founder & Developer",
      what: "I started making of Jutul Music at 2021 and still working to improve the features of it.",
      img: "/projects/jutulmusic.webp",
      linkto: "https://jutulmusicbot.tk"
    }
  ] as MAINPROJECTS[],

  SIDEPROJECTS: [
    {
      title: "To-Do List",
      description: "A React to-do list app.",
      img: "/projects/todo.png",
      linkto: "todo",
      view: "https://todo.draxya.com/",
      mode: "1"
    },
    {
      title: "Aesir Minecraft",
      description: "A brand new survival experience for everyone.",
      img: "/projects/aesirmc.png",
      linkto: "aesir",
      view: "https://discord.gg/VtgeKGh78H",
      mode: "2"
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