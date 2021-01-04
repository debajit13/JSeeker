import React from "react";
import { Table } from "reactstrap";
import { Button } from "reactstrap";
import "./Table.css";
import data from "./data";

const Tablee = (props) => {
  return (
    <Table striped className="mt-5">
      <thead>
        <tr>
          <th>No</th>
          <th>Company</th>
          <th>Career Site</th>
          <th>Glassdor Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.companyName}</td>
            <td>
              <a href={item.carrearURL} target="_blank">
                <Button color="primary">Click</Button>
              </a>
            </td>
            <td>
              <a href={item.glassdoorURL} target="_blank">
                <Button color="primary">Click</Button>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tablee;
