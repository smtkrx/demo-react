import { useState } from "react";
import api from "../api/axiosConfig";
import DemoList from "./DemoList";
import React, { Component }  from 'react';

const DemoCrud = ({ load, demo }) => {
/* state definition  */
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [not, setNot] = useState("");

  /* being handlers */
  async function save(event) {
    event.preventDefault();
    await api.post("/create", {
      fullName: fullName,
      not: not
    });
    alert("Demo Record Saved");
    // reset state
    setId("");
    setFullName("");
    setNot("");
    load();
  }
  async function editEmployee(demo) {
    setFullName(demo.fullName);
    setNot(demo.not);
    setId(demo.id);
  }

  async function deleteEmployee(id) {
    await api.delete("/delete/" + id);
    alert("Demo Details Deleted Successfully");
    load();
  }

  async function update(event) {
    event.preventDefault();
    if (!id) return alert("Demo Details No Found");
    await api.put("/update", {
      id: id,
      fullName: fullName,
      not: not,
    });
    alert("Demo Details Updated");
    // reset state
    setId("");
    setFullName("");
    setNot("");
    load();
  }
  /* end handlers */

/* jsx */
  return (
    <div className="container mt-4">
      <form>
        <div className="form-group my-2">
          <input
            type="text"
            className="form-control"
            hidden
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <label>Tam Ad</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Not</label>
          <input
            type="text"
            className="form-control"
            value={not}
            onChange={e => setNot(e.target.value)}
          />
        </div>

        <div>
          <button className="btn btn-primary m-4" onClick={save}>
            Kaydet
          </button>
          <button className="btn btn-warning m-4" onClick={update}>
            Güncelle
          </button>
        </div>
      </form>
      <DemoList
        demo={demo}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default DemoCrud;