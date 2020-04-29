import React, { useContext } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import Controller from '../controller';
import CreateTodoForm from '../create-todo';
import ListView from '../listview';
import TableView from '../tableview';

import { TodoContext } from '../../context/todo';

const Todos = () => {
  const {
    todos,
    view,
    searchTerm,
    filter,
    isOpenForm,
    toggleForm,
  } = useContext(TodoContext);

  const performSearch = () => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const performFilter = (todos) => {
    if (filter === 'completed') {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === 'running') {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  const getView = () => {
    let todos = performSearch();
    todos = performFilter(todos);

    return view === 'list' ? (
      <ListView todos={todos} />
    ) : (
      <TableView todos={todos} />
    );
  };
  return (
    <div>
      <h1 className='display-4 text-center mb-5'>Stack Todos</h1>
      <Controller />
      {getView()}
      <Modal isOpen={isOpenForm} toggle={toggleForm}>
        <ModalHeader toggle={toggleForm}>Create New Todo</ModalHeader>
        <ModalBody>
          <CreateTodoForm />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Todos;
