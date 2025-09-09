// Constantes da aplicação
export const APP_CONFIG = {
  APP_NAME: '📝 Lista de Tarefas',
  APP_DESCRIPTION: 'React + TypeScript + Tailwind CSS',
  MAX_TODO_LENGTH: 200,
  MIN_TODO_LENGTH: 1,
} as const;

// Tarefas de modelo iniciais
export const INITIAL_TODOS = [
  {
    id: '1',
    text: 'Estudar React e TypeScript',
    completed: false,
    createdAt: new Date(),
  },
  {
    id: '2',
    text: 'Implementar funcionalidades do projeto',
    completed: true,
    createdAt: new Date(),
  }
] as const;

// Mensagens da aplicação
export const MESSAGES = {
  EMPTY_STATE_TITLE: 'Nenhuma tarefa adicionada ainda.',
  EMPTY_STATE_SUBTITLE: 'Adicione uma nova tarefa acima para começar!',
  INPUT_PLACEHOLDER: 'Digite uma nova tarefa...',
  ADD_BUTTON: 'Adicionar',
  DELETE_BUTTON: '✕',
  TASKS_TITLE: 'Suas Tarefas',
  TOTAL_LABEL: 'Total',
  COMPLETED_LABEL: 'Concluídas',
} as const;

// Classes CSS comuns
export const CSS_CLASSES = {
  CONTAINER: 'min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4 space-y-6',
  CARD: 'w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden',
  HEADER: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center',
  CONTENT: 'p-6',
  FOOTER: 'bg-gray-50 px-6 py-4 border-t border-gray-200',
} as const;
