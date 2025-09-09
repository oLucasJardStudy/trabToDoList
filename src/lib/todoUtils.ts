import { Todo, TodoStats } from '../types/Todo';

// Gera um ID único para tarefas
export const generateId = (): string => 
  Date.now().toString(36) + Math.random().toString(36).substr(2);

// Valida se o texto da tarefa é válido
export const isValidTodoText = (text: string): boolean => {
  const trimmedText = text.trim();
  return trimmedText.length >= 1 && trimmedText.length <= 200;
};

// Calcula estatísticas das tarefas
export const calculateTodoStats = (todos: Todo[]): TodoStats => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    pending,
    completionRate,
  };
};

// Formata data para exibição
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Filtra tarefas por status
export const filterTodosByStatus = (todos: Todo[], completed: boolean): Todo[] => {
  return todos.filter(todo => todo.completed === completed);
};

// Ordena tarefas por data de criação
export const sortTodosByDate = (todos: Todo[], ascending: boolean = true): Todo[] => {
  return [...todos].sort((a, b) => {
    const dateA = a.createdAt.getTime();
    const dateB = b.createdAt.getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
};
