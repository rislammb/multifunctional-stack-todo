import React, { useContext, useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';

import { TodoContext } from '../../context/todo';

const CreateTodoForm = () => {
  const { createTodo } = useContext(TodoContext);

  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setError('');
    if (event.target.name === 'text') {
      setText(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 4) {
      let newTodo = {
        text: text.trim(),
        description: description.trim(),
        id: Math.round(
          Math.random() * 10000000000000 + Math.random() * 10000000
        ),
        time: new Date(),
        isSelect: false,
        isComplete: false,
      };
      createTodo(newTodo);
      setText('');
      setDescription('');
    } else {
      setError('Todo task at least 5 charecters long');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Enter Task</Label>
        <Input
          placeholder='Enter a task title'
          name='text'
          value={text}
          onChange={handleChange}
          invalid={error ? true : false}
          valid={text.trim().length > 4 ? true : false}
        />
        <FormFeedback>{error}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Task Description</Label>
        <Input
          type='textarea'
          placeholder='Write a short description about your task'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type='submit'>Create Task</Button>
    </Form>
  );
};

export default CreateTodoForm;
