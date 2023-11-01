import { ref } from "vue";

export const commands = ref([]) as { value: string[] };
export const commandInput = ref(null) as { value: string | null };
export const allCommands = ref([]) as { value: string[] };
export const reply = ref<ReplyItem[]>([]);
export const inputRef = ref(null) as { value: HTMLInputElement | null };

const commandList = [
  "help",
  "contact",
  "github",
  "linkedin",
  "resume",
  "projects",
  "skills",
  "whoami",
  "clear",
  "history",
];

const skillsList = [
  "Bash",
  "C#",
  "CSS",
  "Firebase",
  "Git",
  "HTML",
  "Ionic",
  "Java",
  "JavaScript",
  "Kotlin",
  "Linux",
  "Next.js",
  "Pandas",
  "PHP",
  "PostgreSQL",
  "PowerBi",
  "Python",
  "React",
  "SQL",
  "Supabase",
  "Vue.js",
];

export interface ReplyItem {
  htmlText: string;
  htmlLink?: string;
  htmlType: string;
  htmlClass?: string[];
}

export function changeCommandColor() {
  const inputString = (commandInput.value as string).toLowerCase().trim();
  if (inputString.length === 0) {
    inputRef.value?.classList.remove("text-red-500");
    return;
  }
  if (commandList.includes(inputString)) {
    inputRef.value?.classList.remove("text-red-500");
    inputRef.value?.classList.add("text-green-500");
    return;
  }
  inputRef.value?.classList.remove("text-green-500");
  inputRef.value?.classList.add("text-red-500");
}

export function handleTabKey(event: KeyboardEvent) {
  if (event.key === "Tab") {
    event.preventDefault();
    if (commandInput.value == null || commandInput.value.length === 0) {
      emptyTab();
      return;
    }
    const matchingCommands = getMatchingCommands(commandInput.value);
    if (matchingCommands.length === 1) {
      commandInput.value = matchingCommands[0];
      changeCommandColor();
    } else if (matchingCommands.length > 1) {
      tabCommands(matchingCommands);
    }
  }
}

function getMatchingCommands(input: string) {
  return commandList.filter((command) => command.startsWith(input));
}

function tabCommands(matchingCommands: string[]) {
  matchingCommands.forEach((command) => {
    reply.value.push({ htmlText: command, htmlType: "click" });
  });
}

export function handleCommand(command: string) {
  resetColor();
  reply.value = [];
  commands.value.push(command);
  const commandNormalized = command.toLowerCase().trim();
  if (commandList.includes(commandNormalized)) {
    eval(commandNormalized + "()");
    if (commandNormalized !== "history") {
      allCommands.value.push(command);
    }
    return;
  }
  reply.value.push({ htmlText: "Command not found", htmlType: "text" });
}

function resetColor() {
  inputRef.value?.classList.remove("text-red-500");
  inputRef.value?.classList.remove("text-green-500");
}

export function commandClick(command: string) {
  commandInput.value = command;
  changeCommandColor();
}

function help() {
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
}

function clear() {
  commands.value = [];
  reply.value = [];
}

function history() {
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
}

function github() {
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
}

function linkedin() {
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
}

function resume() {
  reply.value.push({
    htmlText: "https://cv-lucasmiserez.vercel.app/",
    htmlType: "iframe",
    htmlClass: ["border-none", "h-[40rem]"],
  });
}

function skills() {
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
}

function whoami() {
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
}

function contact() {
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
}

export function emptyTab() {
  reply.value = [];
  help();
}
