import { Box } from "@mui/material";
import React from "react";
import GridSlider from "../../sliders/GridSlider";
// import PropTypes from 'prop-types'
//
const ThirdSection = (props) => {
  const { title } = props;
  return (
    <Box>
      <GridSlider title={title} />
    </Box>
  );
};

ThirdSection.propTypes = {};

export default ThirdSection;
