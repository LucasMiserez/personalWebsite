import { ref } from 'vue'

export const commands = ref([]) as { value: string[] }
export const commandInput = ref(null) as { value: string | null }
export const allCommands = ref([]) as { value: string[] }
export const reply = ref([]) as { value: string[] }

export const types = ref('') as { value: string }

const commandList = [
  'help',
  'contact',
  'github',
  'linkedin',
  'resume',
  'projects',
  'skills',
  'whoami',
  'clear',
  'history'
]

export function handleCommand(command: string) {
  reply.value = []
  commands.value.push(command)
  const commandNormalized = command.toLowerCase().trim()
  if (commandList.includes(commandNormalized)) {
    eval(commandNormalized + '()')
    if (commandNormalized !== 'history') {
      allCommands.value.push(command)
    }
    return
  }
  reply.value.push('Command not found')
}

export function historyClick(command: string) {
  commandInput.value = command
}

function help() {
  types.value = 'click'
  reply.value.push('Available commands:')
  commandList.forEach((command) => {
    reply.value.push(command)
  })
  console.log(reply.value)
}

function clear() {
  commands.value = []
  reply.value = []
}

function history() {
  types.value = 'click'
  if (allCommands.value.length === 0) {
    reply.value.push('No commands in history')
    return
  }
  allCommands.value.forEach((command) => {
    reply.value.push(command)
  })
}

function github() {
  types.value = 'link'
  reply.value.push('https://github.com/LucasMiserez')
}

function linkedin() {
  types.value = 'link'
  reply.value.push('https://www.linkedin.com/in/lucas-miserez/')
}

function resume() {
  types.value = 'iframe'
  reply.value.push('https://cv-lucasmiserez.vercel.app/')
}
