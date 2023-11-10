import React, { useState } from "react";
import { Box, Button, Collapse, Divider, Grid } from "@mui/material";
import ProductCard from "../../product/ProductCard";
import {
  ProductContainer,
  SecondSectionContainer,
  SecondSectionTitle,
} from "./style";

const SecondSection = (props) => {
  const { title, products } = props;
  // console.log("products", products);
  const [isOpen, setIsOpen] = useState(false);

  const mainProducts = products.filter((item, index) => index <= 3);
  const hiddenProducts = products.filter(
    (item, index) => index >= 3 && index <= 6
  );

  console.log("MainProducts:", mainProducts);
  console.log("HiddenProducts:", hiddenProducts);
  const handleClose = () => {
    // console.log("isClose: ", isOpen);

    setIsOpen((open) => !open);
  };

  return (
    <SecondSectionContainer>
      <Grid item>
        <SecondSectionTitle variant="h1">{title}</SecondSectionTitle>
      </Grid>
      <ProductContainer isOpen={isOpen}>
        {mainProducts.map((item) => (
          <Box key={item.id} xs={12} md={3} lg={4}>
            <ProductCard product={item} />
          </Box>
        ))}
      </ProductContainer>
      <Collapse in={isOpen}>
        <ProductContainer spacing={4}>
          {hiddenProducts.map((item) => (
            <Box key={item.id} xs={12} md={3} lg={4}>
              <ProductCard product={item} />
            </Box>
          ))}
        </ProductContainer>
      </Collapse>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClose}
          sx={{
            marginTop: "36px",
            borderRadius: "40px",
            width: "218px",
            height: "52px",
            borderColor: "rgba(0,0,0,0.1)",
            color: "#000",
          }}
          variant="outlined"
        >
          {isOpen ? "Close" : "View All"}
        </Button>
      </Box>
    </SecondSectionContainer>
  );
};

SecondSection.propTypes = {};

export default SecondSection;
