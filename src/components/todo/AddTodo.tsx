import React, { useState } from 'react';
import { AddTodoProps, TodoFormEvent, TodoInputEvent } from '../../types/Todo';
import { MESSAGES } from '../../constants';
import { isValidTodoText } from '../../lib/todoUtils';

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: TodoFormEvent) => {
    e.preventDefault();
    if (isValidTodoText(inputValue)) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const handleInputChange = (e: TodoInputEvent) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="mb-8" onSubmit={handleSubmit}>
      <div className="flex gap-3 bg-gray-50 rounded-xl p-2 border-2 border-gray-200 transition-all focus-within:border-blue-500 focus-within:shadow-lg">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={MESSAGES.INPUT_PLACEHOLDER}
          className="flex-1 px-4 py-3 text-base bg-transparent text-gray-800 rounded-lg placeholder-gray-500 focus:outline-none"
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 min-w-[100px]"
        >
          {MESSAGES.ADD_BUTTON}
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
