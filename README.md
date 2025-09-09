# 📝 Lista de Tarefas (To-Do List)

Uma aplicação moderna de lista de tarefas desenvolvida com React, TypeScript e Tailwind CSS, oferecendo uma interface intuitiva e responsiva para gerenciar suas atividades diárias.

## 🎯 Sobre o Projeto

Esta aplicação permite aos usuários:

- **Adicionar tarefas**: Criar novas tarefas através de um campo de texto intuitivo
- **Visualizar tarefas**: Listar todas as tarefas criadas com contador dinâmico
- **Marcar como concluída**: Alternar o status de conclusão das tarefas com feedback visual
- **Deletar tarefas**: Remover tarefas indesejadas com um clique
- **Análise de produtividade**: Visualizar estatísticas detalhadas sobre o progresso das tarefas

A aplicação inclui duas tarefas de modelo para demonstração e não requer persistência de dados (os dados são resetados ao atualizar a página).

## 🛠️ Tecnologias Utilizadas

### Core Technologies
- **React 19.1.1** - Biblioteca para construção de interfaces de usuário
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.1.2** - Build tool e servidor de desenvolvimento rápido

### Styling & UI
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **Shadcn/UI** - Biblioteca de componentes reutilizáveis
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones modernos e consistentes

### Development Tools
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos CSS automaticamente

## 🏗️ Estrutura de Componentes

A aplicação é organizada em componentes modulares e reutilizáveis:

### `App.tsx` (Componente Principal)
- **Responsabilidade**: Gerenciar o estado global da aplicação e coordenar todos os componentes
- **Estado**: Array de tarefas (`todos`) com 2 tarefas de modelo
- **Funções**: `addTodo`, `toggleTodo`, `deleteTodo`
- **Comunicação**: Passa dados e funções para componentes filhos via props

### `AddTodo.tsx` (Formulário de Adição)
- **Responsabilidade**: Permitir ao usuário adicionar novas tarefas
- **Estado Local**: `inputValue` para controlar o valor do input
- **Comunicação**: Recebe `onAddTodo` como prop e chama quando o formulário é submetido
- **Validação**: Impede adição de tarefas vazias

```tsx
const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };
  // ...
};
```

### `TodoList.tsx` (Lista de Tarefas)
- **Responsabilidade**: Renderizar a lista de tarefas e gerenciar o estado vazio
- **Comunicação**: Recebe `todos`, `onToggleTodo` e `onDeleteTodo` como props
- **Funcionalidades**: Exibe contador de tarefas e mensagem quando não há tarefas

### `TodoItem.tsx` (Item Individual)
- **Responsabilidade**: Renderizar uma tarefa individual com suas ações
- **Comunicação**: Recebe `todo`, `onToggle` e `onDelete` como props
- **Estados Visuais**: Aplica estilos diferentes para tarefas concluídas
- **Interações**: Checkbox para marcar/desmarcar e botão para deletar

```tsx
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`... ${todo.completed ? 'bg-green-50 border-green-300' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={`... ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>✕</button>
    </div>
  );
};
```

### `TodoAnalytics.tsx` (Análise de Produtividade)
- **Responsabilidade**: Exibir estatísticas e insights sobre as tarefas
- **Comunicação**: Recebe `todos` como prop
- **Cálculos**: Total, concluídas, pendentes e taxa de conclusão
- **Componentes**: Utiliza Shadcn/UI (Card, Badge, Progress)

## 📊 Gerenciamento de Estado (useState)

A aplicação utiliza o hook `useState` para gerenciar diferentes estados:

### Estado Principal - Array de Tarefas
```tsx
const [todos, setTodos] = useState<Todo[]>([
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
]);
```

### Estado Local - Input de Nova Tarefa
```tsx
const [inputValue, setInputValue] = useState('');
```

### Funções de Manipulação de Estado

**Adicionar Tarefa:**
```tsx
const addTodo = (text: string) => {
  const newTodo: Todo = {
    id: generateId(),
    text,
    completed: false,
    createdAt: new Date(),
  };
  setTodos(prevTodos => [...prevTodos, newTodo]);
};
```

**Alternar Status:**
```tsx
const toggleTodo = (id: string) => {
  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

**Deletar Tarefa:**
```tsx
const deleteTodo = (id: string) => {
  setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
};
```

## 🔧 Tipagem com TypeScript

O TypeScript é utilizado extensivamente para garantir type safety e melhor experiência de desenvolvimento:

### Interface Principal - Todo
```tsx
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}
```

### Interfaces de Props dos Componentes

**AddTodoProps:**
```tsx
interface AddTodoProps {
  onAddTodo: (text: string) => void;
}
```

**TodoItemProps:**
```tsx
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
```

**TodoListProps:**
```tsx
interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}
```

**TodoAnalyticsProps:**
```tsx
interface TodoAnalyticsProps {
  todos: Todo[];
}
```

### Tipagem de Eventos
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // ...
};
```

### Função de Geração de ID Tipada
```tsx
const generateId = (): string => 
  Date.now().toString(36) + Math.random().toString(36).substr(2);
```

## ⚡ Efeitos Colaterais (useEffect)

**Nota**: Esta versão da aplicação não utiliza o hook `useEffect`. 

Em versões anteriores, o `useEffect` foi utilizado para logging de mudanças no estado das tarefas:

```tsx
useEffect(() => {
  console.log('Lista de tarefas atualizada:', todos);
}, [todos]);
```

**Por que foi removido?**
- O logging não era essencial para a funcionalidade da aplicação
- Simplificação do código para focar nas funcionalidades principais
- Redução de complexidade desnecessária

**Quando seria útil usar useEffect?**
- Persistência de dados no localStorage
- Integração com APIs externas
- Animações ou efeitos visuais complexos
- Limpeza de recursos ou subscriptions

## 🚀 Como Executar

1. **Clone o repositório**
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

## 📱 Funcionalidades Implementadas

- ✅ Adicionar novas tarefas
- ✅ Listar todas as tarefas com contador
- ✅ Marcar/desmarcar tarefas como concluídas
- ✅ Deletar tarefas individuais
- ✅ Análise de produtividade com estatísticas
- ✅ Interface responsiva e moderna
- ✅ Feedback visual para todas as interações
- ✅ Tarefas de modelo para demonstração

## 🎨 Design e UX

- **Gradiente de fundo** azul para roxo
- **Cards brancos** com sombras e bordas arredondadas
- **Animações suaves** em hover e interações
- **Cores semânticas** (verde para concluído, vermelho para deletar)
- **Layout responsivo** que se adapta a diferentes tamanhos de tela
- **Componentes Shadcn/UI** para consistência visual

---

**Desenvolvido por Lucas Jardim Rocha**
