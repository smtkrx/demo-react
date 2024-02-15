import "bootstrap/dist/css/bootstrap.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import "./App.css";
import DemoCrud from "./components/DemoCrud";
import React, { Component }  from 'react';

function App() {
  const [demo, setDemo] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await api.get("/all");
    setDemo(result.data);
  }

  return (
    <div>
      <h1 className="text-center">Öğrenci Notları</h1>
      <DemoCrud load={load} demo={demo} />
    </div>
  );
}

export default App;