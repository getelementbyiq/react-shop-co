import { Divider, Grid, ListItem, ListItemText } from "@mui/material";
import React from "react";
import {
  HorizontalList,
  MainContainer,
  MainContentWrapper,
  MainSubTitle,
  MainTitle,
  ShopButton,
} from "./styles";
// import PropTypes from 'prop-types'

const FirstSection = (props) => {
  const { title } = props;
  //
  return (
    <MainContainer container>
      <MainContentWrapper item md={6}>
        <MainTitle variant="h1">{title}</MainTitle>
        <MainSubTitle>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </MainSubTitle>
        <ShopButton>Shop Now</ShopButton>
        <HorizontalList>
          <ListItem>
            <ListItemText
              primar
              primary="200+"
              secondary="International Brands"
            />
            <Divider orientation="vertical" />
          </ListItem>
          <ListItem>
            <ListItemText primary="200+" secondary="International Brands" />
            <Divider orientation="vertical" />
          </ListItem>
          <ListItem>
            <ListItemText primary="200+" secondary="International Brands" />
          </ListItem>
        </HorizontalList>
      </MainContentWrapper>
      <Grid item md={6}></Grid>
    </MainContainer>
  );
};

FirstSection.propTypes = {};

export default FirstSection;
