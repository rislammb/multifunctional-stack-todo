import React, { useContext } from 'react';
import { CustomInput, Button, Table } from 'reactstrap';

import { TodoContext } from '../../context/todo';

const RowItem = ({ todo }) => {
  const { toggleSelect, toggleComplete } = useContext(TodoContext);
  return (
    <tr>
      <td>
        <CustomInput
          type='checkbox'
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <th>{todo.text}</th>
      <td>{todo.time.toDateString()}</td>
      <td>{todo.description}</td>
      <td>
        <Button
          color={todo.isComplete ? 'danger' : 'success'}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? 'Completed' : 'Running'}
        </Button>
      </td>
    </tr>
  );
};

const TableView = ({ todos }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th>Time</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos && todos.map((todo) => <RowItem key={todo.id} todo={todo} />)}
      </tbody>
    </Table>
  );
};

export default TableView;
