import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import { TodoContext } from '../../context/todo';

const FilterController = () => {
  const { handleFilter, filter } = useContext(TodoContext);
  return (
    <ButtonGroup>
      <Button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => handleFilter('all')}
      >
        All
      </Button>
      <Button
        className={filter === 'running' ? 'active' : ''}
        onClick={() => handleFilter('running')}
      >
        Running
      </Button>
      <Button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => handleFilter('completed')}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

export default FilterController;
