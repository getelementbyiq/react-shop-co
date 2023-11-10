import {
  Box,
  Button,
  Input,
  InputAdornment,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import Brand1 from "../../icons/Brands/Vector.svg";
import Brand2 from "../../icons/Brands/Vector-1.svg";
import Brand3 from "../../icons/Brands/Vector-2.svg";
import Brand4 from "../../icons/Brands/Vector-3.svg";
import Brand5 from "../../icons/Brands/Vector-4.svg";
import { TitleFX } from "../sliders/style";
import { Email } from "@mui/icons-material";

export const BrandsTab = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "100%",
        height: "112px",
        justifyContent: "space-around",
        border: "1px solid black",
        alignItems: "center",
        boxSizing: "content-box",
        backgroundColor: "#000",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
    >
      <Box>
        <img src={Brand1} alt="" />
      </Box>

      <Box>
        <img src={Brand2} alt="" />
      </Box>

      <Box>
        <img src={Brand3} alt="" />
      </Box>
      <Box>
        <img src={Brand4} alt="" />
      </Box>
      <Box>
        <img src={Brand5} alt="" />
      </Box>
    </Box>
  );
};

export const BannerPost = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#fff",
        px: "64px",
        borderRadius: "20px",
      }}
    >
      <TitleFX sx={{ maxWidth: "550px", fontSize: "40px", my: "43px" }}>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </TitleFX>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InputBase
          sx={{
            background: "#fff",
            borderRadius: "30px",
            width: "349px",
            height: "48px",
            mb: "14px",
          }}
          startAdornment={
            <InputAdornment position="start">
              <Email sx={{ ml: "16px", color: "#000", mr: "20px" }} />
            </InputAdornment>
          }
          label="Enter your email address"
        ></InputBase>
        <Button
          sx={{
            background: "#fff",
            borderRadius: "30px",
            width: "349px",
            height: "48px",
          }}
        >
          Subscribe to Newsletter
        </Button>
      </Box>
    </Box>
  );
};
