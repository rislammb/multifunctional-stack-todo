import React, { useContext } from 'react';
import { Label, CustomInput } from 'reactstrap';

import { TodoContext } from '../../context/todo';

const ViewController = () => {
  const { view, changeView } = useContext(TodoContext);
  return (
    <div className='d-flex'>
      <Label for='list-view' className='mr-4'>
        <CustomInput
          type='radio'
          name='view'
          value='list'
          id='list-view'
          onChange={changeView}
          className='d-inline-block'
          checked={view === 'list'}
        />
        List View
      </Label>
      <Label for='table-view' className='mr-4'>
        <CustomInput
          type='radio'
          name='view'
          value='table'
          id='table-view'
          onChange={changeView}
          className='d-inline-block'
          checked={view === 'table'}
        />
        Table View
      </Label>
    </div>
  );
};

export default ViewController;
