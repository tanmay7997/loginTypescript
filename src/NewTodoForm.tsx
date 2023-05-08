import React, { useState, ChangeEvent, FormEvent } from 'react';

interface NewTodoFormProps {
  onAddTodo: (todo: Todo) => void;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      const todo: Todo = {
        id: Date.now(),
        title: newTodo,
        completed: false,
      };
      onAddTodo(todo);
      setNewTodo('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>New Todo:</label>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;