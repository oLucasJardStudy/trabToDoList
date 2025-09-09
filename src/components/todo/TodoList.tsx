import React from 'react';
import TodoItem from './TodoItem';
import type { TodoListProps } from '../../types/Todo';
import { MESSAGES } from '../../constants';

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 px-4 text-gray-500">
        <p className="text-lg font-semibold text-gray-700 mb-2">{MESSAGES.EMPTY_STATE_TITLE}</p>
        <p className="text-sm opacity-80">{MESSAGES.EMPTY_STATE_SUBTITLE}</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {MESSAGES.TASKS_TITLE} ({todos.length})
      </h2>
      <div className="max-h-96 overflow-y-auto pr-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
