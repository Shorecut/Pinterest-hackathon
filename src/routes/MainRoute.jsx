import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AddPinPage from "../pages/AddPinPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPinPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
