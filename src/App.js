import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Login from "./pages/Auth/Login";

import Docboard from "./pages/Dashboards/Docboard";
import UserPlan from "./pages/Dashboards/UserPlan";

import {
  Patients,
  CreatePatientRecord,
  PatientRecords,
  ViewPatientRecord,
  SearchPatientRecord,
  DocForms,
  CreateForm,
  ShowForm,
  FormActivations,
} from "./Components/Doctor/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home/" element={<Home />} exact />
          <Route path="/login/" element={<Login />} exact />
          <Route path="/logout/" element={<Login />} exact />
          <Route path="/dashboard/" element={<Docboard />} exact />
          <Route path="/plans/" element={<UserPlan />} exact />
          <Route path="/view/patients/" element={<Patients />} exact />
          <Route
            path="/view/patients/create/"
            element={<CreatePatientRecord />}
            exact
          />
          <Route
            path="/view/patients/all/records/"
            element={<PatientRecords />}
            exact
          />
          <Route
            path="/view/patients/record/:pid/"
            element={<ViewPatientRecord />}
            exact
          />
          <Route
            path="/view/patients/record/search/:pid/"
            element={<SearchPatientRecord />}
            exact
          />
          <Route path="/view/forms/" element={<DocForms />} exact />
          <Route path="/view/forms/create/" element={<CreateForm />} exact />
          <Route path="/view/forms/format/" element={<ShowForm />} exact />
          <Route
            path="/view/forms/activations/"
            element={<FormActivations />}
            exact
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
