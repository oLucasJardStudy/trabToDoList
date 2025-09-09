import { useState } from 'react';
import { AddTodo, TodoList, TodoAnalytics } from './components';
import type { Todo } from './types/Todo';
import { APP_CONFIG, INITIAL_TODOS, CSS_CLASSES, MESSAGES } from './constants';
import { generateId } from './lib/todoUtils';

function App() {
  // Estado inicial com tarefas de modelo
  const [todos, setTodos] = useState<Todo[]>([...INITIAL_TODOS]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className={CSS_CLASSES.CONTAINER}>
      {/* Card Principal - Lista de Tarefas */}
      <div className="w-full max-w-2xl">
        <div className={CSS_CLASSES.CARD}>
          {/* Header */}
          <div className={CSS_CLASSES.HEADER}>
            <h1 className="text-3xl font-bold">{APP_CONFIG.APP_NAME}</h1>
            <p className="text-blue-100 mt-2">{APP_CONFIG.APP_DESCRIPTION}</p>
          </div>
          
          {/* Main Content */}
          <div className={CSS_CLASSES.CONTENT}>
            <AddTodo onAddTodo={addTodo} />
            <TodoList 
              todos={todos} 
              onToggleTodo={toggleTodo} 
              onDeleteTodo={deleteTodo} 
            />
          </div>
          
          {/* Footer */}
          <div className={CSS_CLASSES.FOOTER}>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div>
                {MESSAGES.TOTAL_LABEL}: <span className="font-semibold text-gray-800">{todos.length}</span>
              </div>
              <div>
                {MESSAGES.COMPLETED_LABEL}: <span className="font-semibold text-green-600">{todos.filter(todo => todo.completed).length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card de Análise */}
      <TodoAnalytics todos={todos} />
    </div>
  );
}

export default App
