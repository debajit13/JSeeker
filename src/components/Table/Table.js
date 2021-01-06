import React from "react";
import { MDBDataTable, MDBBtn } from "mdbreact";
import "./Table.css";
import data from "./data";

const Tablee = () => {
  data.sort((a, b) => a.companyName.localeCompare(b.companyName)); //sort all companies alphabetically by their names

  const datas = {
    columns: [
      {
        label: "No",
        field: "no",
      },
      {
        label: "Company",
        field: "company",
        sort: "asc",
      },
      {
        label: "Carrear Site",
        field: "carrearURL",
      },
      {
        label: "Glassdoor Link",
        field: "glassdoorURL",
      },
    ],

    rows: [
      ...data.map((item, index) => ({
        no: index + 1,
        company: item.companyName,
        carrearURL: (
          <a href={item.carrearURL} target="_blank">
            <MDBBtn color="primary">Click</MDBBtn>
          </a>
        ),
        glassdoorURL: (
          <a href={item.glassdoorURL} target="_blank">
            <MDBBtn color="primary">Click</MDBBtn>
          </a>
        ),
      })),
    ],
  };
  return (
    <div>
      <MDBDataTable data={datas} striped className="table mt-5 " />
    </div>
  );
};

export default Tablee;
