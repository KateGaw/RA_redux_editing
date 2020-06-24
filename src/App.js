import React from "react";
import ServiceCrud from "./components/ServiceCrud";
import ServiceList from "./components/ServiceList";
import ServiceCrudClassBased from "./components/ServiceCrudClassBased";
import ServiceListClassBased from "./components/ServiceListClassBased";
import "./App.css";

function App() {
  return (
    <>
      <ServiceCrud />
      <ServiceList />
      <hr />
      <ServiceCrudClassBased />
      <ServiceListClassBased />
    </>
  );
}

export default App;
