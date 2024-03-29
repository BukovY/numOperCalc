import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import CachedIcon from "@material-ui/icons/Cached";
import InfoIcon from "@material-ui/icons/Info";
import { Box } from "@material-ui/core";

export default function MenuHeader() {
  return (
    <Box display="flex" justifyContent="space-around">
      <NavLink to="/">
        <HomeIcon fontSize="large" color="primary" />
      </NavLink>
      <NavLink to="/compile">
        <CachedIcon fontSize="large" color="primary" />
      </NavLink>
      <NavLink to="/info">
        <InfoIcon fontSize="large" color="primary" />
      </NavLink>
    </Box>
  );
}
