import React from 'react';
import { Row, Col } from 'reactstrap';

import SearchPanel from './search-panel';
import FilterController from './filter-controller';
import ViewController from './view-controller';
import BulkController from './bulk-controller';

const Controller = () => (
  <div>
    <SearchPanel />
    <Row className='my-4'>
      <Col md={{ size: 4 }}>
        <FilterController />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController />
      </Col>
      <Col md={{ size: 4 }} className='d-flex'>
        <div className='ml-auto'>
          <BulkController />
        </div>
      </Col>
    </Row>
  </div>
);

export default Controller;
