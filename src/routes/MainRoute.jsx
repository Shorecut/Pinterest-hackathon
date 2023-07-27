import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AddPinPage from "../pages/AddPinPage";
import EditPinPage from "../pages/EditPinPage";
import AuthPage from "../pages/AuthPage";
import AdminProtectedRoute from "./AdminProtectedRoute";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<AdminProtectedRoute />}>
            <Route path="/add" element={<AddPinPage />} />
            <Route path="/edit/:id" element={<EditPinPage />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
