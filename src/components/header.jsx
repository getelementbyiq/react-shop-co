import React from "react";
// import PropTypes from "prop-types";
import { AppBar, Typography, Box, IconButton } from "@mui/material";
import SearchBar from "./SearchBar";
import styled from "@emotion/styled";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoPng from "../icons/SHOP.CO.png";
import ShopCardPng from "../icons/ShopCard.png";
import ProfilePng from "../icons/Profile.svg";
import GroupMenu from "./DropdownMenu";
import CustomizedMenus from "./DropdownMenu";
// import DropdownMenu from "./DropdownMenu";

const HeaderFX = styled(AppBar)(() => ({
  height: "96px",
  display: "flex",
  justifyContent: "space-between",
  background: "#fff",
  justifyContent: "center",
  color: "#000",
  boxShadow: "none",
  position: "sticky",
}));

const LinksHeader = styled(Typography)(() => ({
  marginRight: "20px",
  cursor: "pointer",
  "&:hover": {
    color: "darkblue",
  },
}));

const Logo = styled(Typography)(() => ({
  color: "#000",
  leadingTrim: "both",
  textEdge: "cap",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  marginRight: "30px",
}));
const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  // border: "1px solid black",
}));

const Container1 = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  padding: "0 100px",
}));

const RightHeaderHolder = styled(Box)(() => ({
  display: "flex",
}));

const Header = () => {
  return (
    <>
      {/* Header */}
      <HeaderFX>
        <Container1>
          {/* alle Links */}
          <Container>
            <Box sx={{ marginRight: "40px" }}>
              <img src={LogoPng} alt="" />
            </Box>

            {/* <Logo>SHOP.CO</Logo> */}
            <CustomizedMenus />
            <Box sx={{ display: "flex" }}>
              <LinksHeader>On Sale</LinksHeader>
              <LinksHeader>New Arrivals</LinksHeader>
              <LinksHeader>Brands</LinksHeader>
            </Box>
          </Container>
          {/* Searchbar */}
          <SearchBar />
          {/* right icons, shopcard and profile */}
          <RightHeaderHolder>
            <IconButton sx={{ marginRight: "4px", cursor: "pointer" }}>
              <img src={ShopCardPng} alt="" />
            </IconButton>
            <IconButton>
              <img src={ProfilePng} alt="" />
            </IconButton>
          </RightHeaderHolder>
        </Container1>
      </HeaderFX>
    </>
  );
};

Header.propTypes = {};

export default Header;
