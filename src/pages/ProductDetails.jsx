import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../requester";
import {
  AddToCardFX,
  ColorButtonFX,
  CounterFX,
  PriseFX,
  SizeButtonFX,
  TitleDetailsFX,
} from "../components/sliders/style";
import { MainImg, SideGallery } from "./style";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  PrecentWrapper,
  ProductNewPrice,
  ProductOldPrice,
  ProductPrecentege,
} from "../components/product/style";
import { Height, RadioButtonChecked } from "@mui/icons-material";
// import PropTypes from 'prop-types'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [prodImg, setProdImg] = useState([]);
  const [img, setImg] = useState([]);

  const [bgColor, setBgColor] = useState(false);
  const handleChooseColor = () => {
    setBgColor((isChoosen) => !isChoosen);
  };
  console.log(bgColor);

  // #############################
  // ############################ Choose Color
  // #############################

  const [count, setCount] = useState(1);
  const handleCountIncrease = () => {
    setCount(count + 1);
  };

  const [size, setSize] = useState("small");
  const handeSize = (event, newValue) => {
    setSize(newValue);
  };

  //   const [minus, setMinus] = useState(true);
  //   setMinus(0);

  const handleCountDecrease = () => {
    if (count === 0) {
      //   setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const getProduct = useCallback(async () => {
    const response = await API.get(`products/${id}`);
    setProduct(response.data);
    setProdImg(response.data.images[0]);
    setImg(response.data.images);
  }, [id]);

  const handleChangeImg = (item) => {
    setProdImg(item);
  };
  console.log("product:", product);
  console.log(product.images);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <Box
      container
      sx={{
        display: "flex",
        // border: "1px solid green",
        mx: "100px",
      }}
    >
      <Box
        sx={{
          flexBasis: "50%",
          display: "flex",
          //   border: "1px solid orange",
          alignItems: "center",
          mr: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // border: "1px solid red",
            maxHeight: "530px",
            gap: "9px",
          }}
        >
          {img
            .filter((item, index) => index <= 2)
            .map((item) => (
              <Box>
                <SideGallery
                  src={item}
                  alt="image"
                  onClick={() => handleChangeImg(item)}
                />
              </Box>
            ))}
        </Box>
        <MainImg src={prodImg} alt="image" />
      </Box>
      <Box>
        <TitleDetailsFX>{product.title}</TitleDetailsFX>
        <Rating
          sx={{ mb: "14px" }}
          name="read-only"
          value={product.rating}
          readOnly
        />
        <PrecentWrapper>
          <ProductNewPrice>
            $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </ProductNewPrice>
          <ProductOldPrice>${product.price}</ProductOldPrice>
          <ProductPrecentege label={`-${product.discountPercentage}%`} />
        </PrecentWrapper>
        <Typography sx={{ fontSize: "20px", mt: "14px" }}>
          {product.description}
        </Typography>
        <Divider sx={{ mt: "24px" }} />

        {/* ################################
#################################  sELECT COLOR
################################## */}

        <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="green"
              name="radio-buttons-group"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="brown"
                control={
                  <Radio
                    checkedIcon={
                      <CheckCircleIcon
                        checked
                        sx={{
                          color: "#4F4631 ",
                          width: "37px",
                          height: "37px",
                        }}
                      />
                    }
                    icon={
                      <CircleIcon
                        sx={{
                          color: " #4F4631 ",
                          width: "37px",
                          height: "37px",
                        }}
                      />
                    }

                    // checkedIcon={<CheckCircleIcon checked />}
                    // Icon={<CircleIcon />}
                    // sx={{ background: "black" }}
                  />
                }
              />
              <FormControlLabel
                value="green"
                control={
                  <Radio
                    checkedIcon={
                      <CheckCircleIcon
                        checked
                        sx={{
                          color: "#314F4A ",
                          width: "37px",
                          height: "37px",
                        }}
                      />
                    }
                    icon={
                      <CircleIcon
                        sx={{
                          color: " #314F4A ",
                          width: "37px",
                          height: "37px",
                        }}
                      />
                    }
                  />
                }
              />
              <FormControlLabel
                value="purple"
                control={
                  <Radio
                    checkedIcon={
                      <CheckCircleIcon
                        checked
                        sx={{
                          color: "#31344F ",
                          width: "37px",
                          height: "37px",
                        }}
                      />
                    }
                    icon={
                      <CircleIcon
                        sx={{
                          color: " #31344F ",
                          width: "37px",
                          height: "37px",
                        }}
                      />
                    }
                  />
                }
              />
            </RadioGroup>
          </FormControl>
          <Divider />

          {/* #######################################
        ####################################### */}

          <ToggleButtonGroup
            sx={{ gap: "16px" }}
            color="primary"
            value={size}
            exclusive
            onChange={handeSize}
            aria-label="Platform"
          >
            <ToggleButton
              value="small"
              sx={{ width: "150px", borderRadius: "30px" }}
            >
              Small
            </ToggleButton>
            <ToggleButton value="medium" sx={{ width: "150px" }}>
              Medium
            </ToggleButton>
            <ToggleButton value="large" sx={{ width: "150px" }}>
              Large
            </ToggleButton>
            <SizeButtonFX
              id="SizdeButton"
              sx={{ background: bgColor ? "#000" : "#F0F0F0" }}
            >
              <Typography
                sx={{ color: bgColor ? "#fff" : "#000", textTransform: "none" }}
                value="red"
              >
                Red
              </Typography>
            </SizeButtonFX>
          </ToggleButtonGroup>
          {/* #################################### MY OLD CODE */}

          {/* <Typography
            sx={{ fontSize: "18px", mt: "14px", color: "rgba(0,0,0,0.5)" }}
          >
            Select Colors
          </Typography>
          <Toolbar sx={{ gap: "16px", mb: "9px" }} className="colorButtons">
            <ColorButtonFX id="ColorButton" onClick={handleChooseColor}>
              <CheckIcon sx={{ color: bgColor ? "#fff" : "rgba(0,0,0,0)" }} />
            </ColorButtonFX>
          </Toolbar>
          <Divider />
          <Typography
            sx={{ fontSize: "18px", mt: "14px", color: "rgba(0,0,0,0.5)" }}
          >
            Choose Size
          </Typography> */}

          {/* ################################
#################################  CHOOOSE SIZE
################################## */}

          <Toolbar sx={{ gap: "16px", mb: "9px" }} className="colorButtons">
            <SizeButtonFX
              id="SizdeButton"
              onClick={handleChooseColor}
              sx={{ background: bgColor ? "#000" : "#F0F0F0" }}
            >
              <Typography
                sx={{ color: bgColor ? "#fff" : "#000", textTransform: "none" }}
              >
                Small
              </Typography>
            </SizeButtonFX>
            <SizeButtonFX
              id="SizdeButton"
              onClick={handleChooseColor}
              sx={{ background: bgColor ? "#000" : "#F0F0F0" }}
            >
              <Typography
                sx={{ color: bgColor ? "#fff" : "#000", textTransform: "none" }}
              >
                Small
              </Typography>
            </SizeButtonFX>
          </Toolbar>
          <Divider />

          {/* ################################
#################################  ADD MORE
################################## */}

          <Toolbar
            sx={{ gap: "16px", mb: "9px", mt: "9px" }}
            className="colorButtons"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "14px",
                  marginTop: "10px",
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                Add More
              </Typography>

              {/* ################################
#################################  Increase Decrease
################################## */}

              <CounterFX>
                <Box>
                  <RemoveIcon
                    onClick={handleCountDecrease}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Box>
                <Typography>{count}</Typography>
                <Box>
                  <AddIcon
                    onClick={handleCountIncrease}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </CounterFX>
            </Box>
            {/* ################################
#################################   Total without Taxes
################################## */}
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginTop: "10px",
                  marginBottom: "14px",
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                Total without Taxes
              </Typography>
              <PriseFX>
                <ProductNewPrice>
                  $
                  {(
                    (product.price -
                      (product.price * product.discountPercentage) / 100) *
                    count
                  ).toFixed(2)}
                </ProductNewPrice>
              </PriseFX>
            </Box>
            <Box>
              <AddToCardFX>
                <Typography>Add To Card</Typography>
              </AddToCardFX>
            </Box>
          </Toolbar>
        </Box>
      </Box>
    </Box>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
