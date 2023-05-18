/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import { Login, Login_Doc, Login_Patient, Register } from "./pages/Auth/index"

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

import Patientboard from "./pages/Dashboards/Patientboard";
import { ViewForms, ViewPrescriptions } from "./Components/Patient/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home/" element={<Home />} exact />
          <Route path="/login/" element={<Login />} exact />
          <Route path="/register/" element={<Register />} exact />
          <Route path="/login/doctor/" element={<Login_Doc />} exact />
          <Route path="/login/patient/" element={<Login_Patient />} exact />
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
          <Route path="/dashboard/patient/" element={<Patientboard />} exact />
          <Route path="/view/patient/forms/" element={<ViewForms />} exact />
          <Route path="/view/patient/prescriptions/" element={<ViewPrescriptions />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
