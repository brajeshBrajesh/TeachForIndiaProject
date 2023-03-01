import "./App.css";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import ClientForm from "./client/ClientForm";
import AdminForm from "./admin/AdminForm";
import { useState } from "react";
import VolunteerDetails from "./admin/VolunteerDetails";
import Allocation from "./admin/Allocation";
import SingleVolunteerDetail from "./components/SingleVolunteerDetail";
import PageDoesNotExist from "./components/PageDoesNotExist";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <BrowserRouter>
      <MyNavbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route path="/" element={<ClientForm />}></Route>
        <Route
          path="/admin"
          element={<AdminForm isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
        ></Route>
        <Route
          path="/volunteer-details"
          element={
            <VolunteerDetails isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          }
        ></Route>
        <Route
          path="/allocation"
          element={<Allocation isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
        ></Route>
        <Route
          path="/allocation/:userId"
          element={<SingleVolunteerDetail isAdmin={isAdmin} />}
        ></Route>
        <Route path="*" element={<PageDoesNotExist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
