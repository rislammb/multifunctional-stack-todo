import React, { createContext, useState } from 'react';

import App from '../App';

export const TodoContext = createContext();

export const TodoProvider = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Create a smart poll app',
      description:
        "This app made by following stack school website's core ReactJS practice project three",
      id: 9233572037809,
      time: new Date(),
      isSelect: false,
      isComplete: false,
    },
    {
      text: 'Create a multi functional stack todo app',
      description:
        "This app made by following stack school website's core ReactJS practice project two",
      id: 9854345974842,
      time: new Date(),
      isSelect: false,
      isComplete: true,
    },
  ]);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('list');
  const [filter, setFilter] = useState('all');

  const toggleForm = () => {
    setIsOpenForm(!isOpenForm);
  };

  const createTodo = (todo) => {
    setTodos([todo, ...todos]);
    toggleForm();
  };

  const toggleSelect = (todoId) => {
    const newTodos = [...todos];
    const todo = newTodos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    setTodos(newTodos);
  };

  const toggleComplete = (todoId) => {
    const newTodos = [...todos];
    const todo = newTodos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    setTodos(newTodos);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const changeView = (event) => {
    setView(event.target.value);
  };

  const clearSelected = () => {
    const newTodos = todos.filter((todo) => !todo.isSelect);
    setTodos(newTodos);
  };
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.isComplete);
    setTodos(newTodos);
  };
  const reset = () => {
    setIsOpenForm(false);
    setSearchTerm('');
    setView('list');
    setFilter('all');
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        isOpenForm,
        view,
        searchTerm,
        filter,
        toggleForm,
        createTodo,
        toggleSelect,
        toggleComplete,
        handleSearch,
        handleFilter,
        changeView,
        clearSelected,
        clearCompleted,
        reset,
      }}
    >
      <App />
    </TodoContext.Provider>
  );
};
