import {
  allCommands,
  reply,
  commandList,
  skillsList,
  commands,
} from "@/components/commands";

type CommandFunctions = {
  [key: string]: () => void;
};
export const commandFunctions: CommandFunctions = {
  help: () => {
    reply.value.push({
      htmlText: "Available commands:",
      htmlType: "text",
      htmlClass: ["text-xl", "font-bold", "underline", "mb-5"],
    });
    commandList.forEach((command) => {
      reply.value.push({
        htmlText: command,
        htmlType: "click",
        htmlClass: ["hover:underline", "mb-1"],
      });
    });
  },
  contact: () => {
    reply.value.push({
      htmlText: "Feel free to contact me!",
      htmlType: "text",
      htmlClass: ["text-xl", "mb-5", "font-bold"],
    });
    reply.value.push({
      htmlText: "miserez.lucas@gmail.com",
      htmlType: "link",
      htmlLink: "mailto:miserez.lucas@gmail.com",
      htmlClass: ["underline", "mb-1"],
    });
    reply.value.push({
      htmlText: "------------------------------------",
      htmlType: "text",
      htmlClass: ["text-xl", "my-5", "font-bold"],
    });
    reply.value.push({
      htmlText: "My LinkedIn",
      htmlLink: "https://www.linkedin.com/in/lucas-miserez/",
      htmlType: "link",
      htmlClass: ["underline", "mb-1"],
    });
  },
  github: () => {
    reply.value.push({
      htmlText: "Feel free to check out my GitHub:",
      htmlType: "text",
      htmlClass: ["text-xl", "mb-5", "font-bold"],
    });
    reply.value.push({
      htmlText: "https://github.com/LucasMiserez",
      htmlLink: "https://github.com/LucasMiserez",
      htmlType: "link",
      htmlClass: ["underline"],
    });
  },
  history: () => {
    if (allCommands.value.length === 0) {
      reply.value.push({
        htmlText: "No commands in history",
        htmlType: "text",
        htmlClass: ["font-bold"],
      });
      return;
    }
    allCommands.value.forEach((command) => {
      reply.value.push({ htmlText: command, htmlType: "click" });
    });
  },
  whoami: () => {
    const age = new Date().getFullYear() - 2003;

    reply.value.push({
      htmlText: "Hi everyone!",
      htmlType: "text",
      htmlClass: ["text-xl", "mb-5", "font-bold"],
    });
    reply.value.push({
      htmlText: "Name: Lucas Miserez",
      htmlType: "text",
      htmlClass: ["mb-1"],
    });
    reply.value.push({
      htmlText: `Age: ${age}`,
      htmlType: "text",
      htmlClass: ["mb-1"],
    });
    reply.value.push({
      htmlText: "Location: Brussels",
      htmlType: "text",
      htmlClass: ["mb-1"],
    });
    reply.value.push({
      htmlText: "Field: web and software development",
      htmlType: "text",
      htmlClass: ["mb-1"],
    });
    reply.value.push({
      htmlText: "OS: Debian (Linux)",
      htmlType: "text",
    });
    reply.value.push({
      htmlText: "------------------------------------",
      htmlType: "text",
      htmlClass: ["text-xl", "my-5", "font-bold"],
    });
    reply.value.push({
      htmlText: "My Github",
      htmlLink: "https://github.com/LucasMiserez",
      htmlType: "link",
      htmlClass: ["underline", "mb-1"],
    });
    reply.value.push({
      htmlText: "My LinkedIn",
      htmlLink: "https://www.linkedin.com/in/lucas-miserez/",
      htmlType: "link",
      htmlClass: ["underline", "mb-1"],
    });
    reply.value.push({
      htmlText: "My Resume(s)",
      htmlLink: "https://cv-lucasmiserez.vercel.app/",
      htmlType: "link",
      htmlClass: ["underline", "mb-1"],
    });
    reply.value.push({
      htmlText: "---------------skills---------------",
      htmlType: "text",
      htmlClass: ["text-xl", "my-5", "font-bold"],
    });
    reply.value.push({
      htmlText:
        "Bash | C# | CSS | Firebase | Git | HTML | Ionic | Java | JavaScript | Kotlin | Linux | Next.js | Pandas | PHP | PostgreSQL | PowerBi | Python | React | SQL | Supabase | Vue.js",
      htmlType: "text",
      htmlClass: ["mb-1"],
    });
  },
  skills: () => {
    reply.value.push({
      htmlText: "Some of my skills:",
      htmlType: "text",
      htmlClass: ["text-xl", "mb-5", "font-bold"],
    });
    skillsList.forEach((command) => {
      reply.value.push({
        htmlText: command,
        htmlType: "text",
        htmlClass: ["mb-1"],
      });
    });
  },
  linkedin: () => {
    reply.value.push({
      htmlText: "Feel free to check out my LinkedIn:",
      htmlType: "text",
      htmlClass: ["text-xl", "mb-5", "font-bold"],
    });
    reply.value.push({
      htmlText: "https://www.linkedin.com/in/lucas-miserez/",
      htmlLink: "https://www.linkedin.com/in/lucas-miserez/",
      htmlType: "link",
      htmlClass: ["underline"],
    });
  },
  projects: () => {
    reply.value.push({
      htmlText: "Some of my projects:",
      htmlType: "text",
      htmlClass: ["text-xl", "mb-5", "font-bold"],
    });
    reply.value.push({
      htmlText: "Railtime: App for planning train trips in Belgium",
      htmlType: "text",
      htmlClass: ["mb-3"],
    });
    reply.value.push({
      htmlText:
        "FomoForReal: Developed a TicketMaster-like platform with ASP.NET and Entity\n" +
        "Framework",
      htmlType: "text",
      htmlClass: ["mb-3"],
    });
    reply.value.push({
      htmlText: "RESTful API: School project developed in PHP and SQL",
      htmlType: "text",
      htmlClass: ["mb-3"],
    });
    reply.value.push({
      htmlText:
        "Natural Language Processing: Implementation of spam detection algorithms with machine" +
        "learning and natural language processing",
      htmlType: "text",
      htmlClass: ["mb-3"],
    });
    reply.value.push({
      htmlText: "Two Tunes: Spotify-like platform with Next.js and Firebase",
      htmlType: "text",
      htmlClass: ["mb-3"],
    });
    reply.value.push({
      htmlText: "...",
      htmlType: "text",
      htmlClass: ["mb-3"],
    });
  },
  resume: () => {
    reply.value.push({
      htmlText: "https://cv-lucasmiserez.vercel.app/",
      htmlType: "iframe",
      htmlClass: ["border-none", "h-[40rem]"],
    });
  },
  clear: () => {
    commands.value = [];
    reply.value = [];
  },
};
