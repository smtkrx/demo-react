import React from "react";

const DemoList = ({ demo, editEmployee, deleteEmployee }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Tam Ad</th>
          <th scope="col">Not</th>

          <th scope="col">Seçenek</th>
        </tr>
      </thead>
      {demo.map((employee, index) => {
        return (
          <tbody key={employee.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{employee.fullName}</td>
              <td>{employee.not}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editEmployee(employee)}
                >
                  Düzenle
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default DemoList;