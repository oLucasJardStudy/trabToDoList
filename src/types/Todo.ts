// Tipos principais da aplicação
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// Props dos componentes Todo
export interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

// Props do componente Analytics
export interface TodoAnalyticsProps {
  todos: Todo[];
}

// Tipos para funções utilitárias
export type TodoAction = 'add' | 'toggle' | 'delete';

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
  completionRate: number;
}

// Tipos para eventos
export type TodoFormEvent = React.FormEvent<HTMLFormElement>;
export type TodoInputEvent = React.ChangeEvent<HTMLInputElement>;
export type TodoButtonEvent = React.MouseEvent<HTMLButtonElement>;
