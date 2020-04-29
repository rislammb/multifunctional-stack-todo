import React, { useContext } from 'react';
import { Input, Button } from 'reactstrap';

import { TodoContext } from '../../context/todo';

const SearchPanel = () => {
  const { searchTerm, handleSearch, toggleForm } = useContext(TodoContext);
  return (
    <div className='d-flex'>
      <Input
        placeholder='Enter Search Term'
        className='mr-3'
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button color='success' onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

export default SearchPanel;
