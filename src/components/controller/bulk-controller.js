import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import { TodoContext } from '../../context/todo';

const BulkController = () => {
  const { clearSelected, clearCompleted, reset } = useContext(TodoContext);
  return (
    <ButtonGroup>
      <Button color='danger' onClick={clearSelected}>
        Clear Selected
      </Button>
      <Button color='danger' onClick={clearCompleted}>
        Clear Completed
      </Button>
      <Button color='danger' onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

export default BulkController;
