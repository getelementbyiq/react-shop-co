import React from "react";
// import PropTypes from 'prop-types'
import Header from "./../components/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
