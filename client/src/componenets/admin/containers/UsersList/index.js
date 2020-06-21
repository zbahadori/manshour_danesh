import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import axios from "axios";

const UsersList = (props) => {
  const API = process.env.REACT_APP_BACKEND_URL + "/api/admin/get-all-users";
  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await axios.get(API);
    setData(result.data);
  }, []);

  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>09121535812</td>
          </tr>
          <tr>
            <ul>
              {data.hits.map((item) => (
                <li key={item.phone_number}>
                  <a href={item.id}>{item.name}</a>
                </li>
              ))}
            </ul>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>0910205982</td>
          </tr>
        </tbody>
      </Table>

      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </>
  );
};

export default UsersList;
