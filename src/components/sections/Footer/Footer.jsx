import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { TitleFX } from "../../sliders/style";
import { SubTitleFooter, TypographyFX } from "./style";
// import PropTypes from 'prop-types'

const Footer = (props) => {
  const { title } = props;
  return (
    <Box
      container
      sx={{
        height: "499px",
        backgroundColor: "#F0F0F0",
        pt: "180px",
      }}
    >
      <Grid container sx={{ justifyContent: "space-between", px: "100px" }}>
        <Box sx={{ maxWidth: "248px" }}>
          <TypographyFX
            sx={{
              fontFamily: "Integral CF Regular",
              fontSize: "33px",
              fontWeight: "700",
              lineHeight: "40px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {title}
          </TypographyFX>
          <TypographyFX>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </TypographyFX>
          <TypographyFX>2</TypographyFX>
        </Box>
        <Box>
          <SubTitleFooter>Company</SubTitleFooter>
          <TypographyFX>About</TypographyFX>
          <TypographyFX>Features</TypographyFX>
          <TypographyFX>Works</TypographyFX>
          <TypographyFX>Career</TypographyFX>
        </Box>
        <Box>
          <SubTitleFooter>Help</SubTitleFooter>
          <TypographyFX>Customer Support</TypographyFX>
          <TypographyFX>Delivery Details</TypographyFX>
          <TypographyFX>Term & Conditions</TypographyFX>
          <TypographyFX>Privacy Policy</TypographyFX>
        </Box>
        <Box>
          <SubTitleFooter>FAQ</SubTitleFooter>
          <TypographyFX>Account</TypographyFX>
          <TypographyFX>Manage Deliveries</TypographyFX>
          <TypographyFX>Orders</TypographyFX>
          <TypographyFX>Payments</TypographyFX>
        </Box>
        <Box>
          <SubTitleFooter>Resources</SubTitleFooter>
          <TypographyFX>Free eBooks</TypographyFX>
          <TypographyFX>Development Tutorial</TypographyFX>
          <TypographyFX>How to - Blog</TypographyFX>
          <TypographyFX>Youtube Playlist</TypographyFX>
        </Box>
      </Grid>
    </Box>
  );
};

Footer.propTypes = {};

export default Footer;
