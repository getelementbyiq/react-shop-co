import styled from "@emotion/styled";
import { Button, Grid, List, Typography } from "@mui/material";
import BackGroundFirstSection from "../../../icons/background.jpg";

export const MainContainer = styled(Grid)(() => ({
  height: "663px",
  background: "red",
  padding: "0 100px",
  backgroundImage: `url("${BackGroundFirstSection}")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingTop: "50px",
}));

export const MainContentWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

export const MainTitle = styled(Typography)(() => ({
  width: "577px",
  fontSize: "64px",
  fontFamily: "Integral CF Regular",
  fontWeight: 700,
}));

export const MainSubTitle = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "22px",
  letterSpacing: "0em",
  textAlign: "left",
  maxWidth: "545px",
}));

export const ShopButton = styled(Button)(() => ({
  width: "210px",
  height: "52px",
  borderRadius: "50px",
  textTransform: "none",
  backgroundColor: "#000",
  color: "#fff",
}));

export const HorizontalList = styled(List)(() => ({
  display: "flex",
  border: "1px solid black",
  marginTop: "18px",
}));
