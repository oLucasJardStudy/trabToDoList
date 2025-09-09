import React from 'react';
import { TodoItemProps, TodoButtonEvent } from '../../types/Todo';
import { MESSAGES } from '../../constants';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = (e: TodoButtonEvent) => {
    e.preventDefault();
    onDelete(todo.id);
  };

  return (
    <div className={`flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 mb-3 transition-all hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 ${todo.completed ? 'bg-green-50 border-green-300' : ''}`}>
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="w-5 h-5 rounded border-2 border-gray-300 bg-white cursor-pointer transition-all hover:border-blue-500 checked:bg-green-500 checked:border-green-500"
        />
        <span className={`text-base text-gray-800 transition-all break-words flex-1 ${todo.completed ? 'line-through text-gray-500 opacity-70' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button 
        onClick={handleDelete} 
        className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all hover:scale-110 hover:shadow-lg active:scale-95 opacity-70 hover:opacity-100"
        aria-label="Deletar tarefa"
      >
        {MESSAGES.DELETE_BUTTON}
      </button>
    </div>
  );
};

export default TodoItem;
