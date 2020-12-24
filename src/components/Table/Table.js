import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import './Table.css';

const Tablee = (props) => {
  return (
    <Table striped className='mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Company</th>
          <th>Career Site</th>
          <th>Glassdor Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Adobe</td>
          <td><Button color="primary">Click Here</Button>{' '}</td>
          <td><Button color="primary">Click Here</Button>{' '}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Microsoft</td>
          <td><Button color="primary">Click Here</Button>{' '}</td>
          <td><Button color="primary">Click Here</Button>{' '}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Paypal</td>
          <td><Button color="primary">Click Here</Button>{' '}</td>
          <td><Button color="primary">Click Here</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tablee;