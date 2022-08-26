import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Login from "./Login/Login";
import history from "./history";
import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";
import UpdateProduct from "./UpdateProduct/UpdateProduct";

// import your route components too

const Router = () => (
  <HistoryRouter history={history}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
    </Routes>
  </HistoryRouter>
);

export default Router;
