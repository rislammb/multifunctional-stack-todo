import React, { useContext } from 'react';
import { ListGroupItem, CustomInput, Button, ListGroup } from 'reactstrap';

import { TodoContext } from '../../context/todo';

const ListItem = ({ todo }) => {
  const { toggleSelect, toggleComplete } = useContext(TodoContext);
  return (
    <ListGroupItem className='d-flex align-items-center'>
      <CustomInput
        type='checkbox'
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className='mx-3'>
        <h4>{todo.text}</h4>
        <p className='small'>{todo.time.toDateString()}</p>
        <p>{todo.description}</p>
      </div>
      <Button
        className='ml-auto'
        color={todo.isComplete ? 'danger' : 'success'}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? 'Completed' : 'Running'}
      </Button>
    </ListGroupItem>
  );
};

const ListView = ({ todos }) => {
  return (
    <ListGroup>
      {todos && todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
    </ListGroup>
  );
};

export default ListView;
