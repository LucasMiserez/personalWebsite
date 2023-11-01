import { ref } from "vue";
import { commandFunctions } from "@/components/functions";

export const commands = ref([]) as { value: string[] };
export const commandInput = ref(null) as { value: string | null };
export const allCommands = ref([]) as { value: string[] };
export const reply = ref<ReplyItem[]>([]);
export const inputRef = ref(null) as { value: HTMLInputElement | null };

let index = 0;

export const commandList = [
  "clear",
  "contact",
  "github",
  "help",
  "history",
  "linkedin",
  "projects",
  "resume",
  "skills",
  "whoami",
];

export const skillsList = [
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

export function handleKeyPress(event: KeyboardEvent) {
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
    return;
  }
  if (event.key == "ArrowUp" && allCommands.value.length > index) {
    index++;
    commandInput.value = allCommands.value[allCommands.value.length - index];
    changeCommandColor();
    setTimeout(function () {
      if (inputRef.value != null) {
        inputRef.value.selectionStart = inputRef.value.selectionEnd = 10000;
      }
    }, 0);
    return;
  }
  if (event.key == "ArrowDown" && index > 0) {
    index--;
    if (index == 0) {
      commandInput.value = "";
      resetColor();
      return;
    }
    commandInput.value = allCommands.value[allCommands.value.length - index];
    changeCommandColor();
    return;
  }
}

function getMatchingCommands(input: string) {
  return commandList.filter((command) => command.startsWith(input));
}

function tabCommands(matchingCommands: string[]) {
  commandFunctions["clear"]();
  matchingCommands.forEach((command) => {
    reply.value.push({ htmlText: command, htmlType: "click" });
  });
}

export function handleCommand(command: string) {
  resetColor();
  reply.value = [];
  commands.value.push(command as string);
  if (command == null || command.length === 0) return;
  const commandNormalized = command.toLowerCase().trim();
  if (commandList.includes(commandNormalized)) {
    commandFunctions[commandNormalized]();
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

export function emptyTab() {
  reply.value = [];
  commandFunctions["help"]();
}
