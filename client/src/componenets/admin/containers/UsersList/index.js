import React from "react";

import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

const AdminUserList = (props) => {
  return (
    <>
      <AdminHeader />
      <AdminMenue />

      <table class="table d-flex flex-column justify-content-center align-items-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <AdminFooter />
    </>
  );
};
export default AdminUserList;
