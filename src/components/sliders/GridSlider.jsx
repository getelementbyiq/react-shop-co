import React from "react";
// import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { GridFX, TitleFX } from "./style";
import Casual from "../../icons/BG-Slider/Causal.jpg";
import Formal from "../../icons/BG-Slider/Formal.jpg";
import Sport from "../../icons/BG-Slider/Gym.jpg";
import Party from "../../icons/BG-Slider/Party.jpg";

const GridSlider = (props) => {
  const { title } = props;
  return (
    <Box
      sx={{
        py: "70px",
        background: "#F0F0F0",
        borderRadius: "40px",
        mx: "100px",
        mb: "80px",
      }}
    >
      <TitleFX>{title}</TitleFX>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "4px",
          flexWrap: "wrap",
          columnGap: "4px",
          px: "100px",
        }}
      >
        <Grid
          sx={{
            margin: "0 70px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          container
        >
          <Grid container sx={{ gap: "20px", flexWrap: "nowrap", mb: "20px" }}>
            <GridFX item md={4}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Casual}
                alt=""
              />
            </GridFX>
            <GridFX item md={8}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Formal}
                alt=""
              />
            </GridFX>
          </Grid>
          <Grid container sx={{ gap: "20px", flexWrap: "nowrap" }}>
            <GridFX item md={8}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Party}
                alt=""
              />
            </GridFX>
            <GridFX item md={4}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Sport}
                alt=""
              />
            </GridFX>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

GridSlider.propTypes = {};

export default GridSlider;
