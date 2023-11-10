import React from "react";
// import PropTypes from "prop-types";
import { Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  return (
    <Input
      sx={{
        flexGrow: 1,
      }}
      placeholder="Search for products..."
      startAdornment={
        <InputAdornment>
          <SearchIcon />
        </InputAdornment>
      }
    >
      SearchBar
    </Input>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
