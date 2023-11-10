import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const TitleFX = styled(Typography)(() => ({
  fontFamily: "Integral CF Regular",
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "58px",
  letterSpacing: "0em",
  textAlign: "center",
  marginBottom: "55px",
}));

export const GridFX = styled(Box)(() => ({
  height: "289px",
  background: "white",
  borderRadius: "20px",
  overflow: "hidden",
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end",
}));

export const TitleDetailsFX = styled(Typography)(() => ({
  fontFamily: "Integral CF Regular",
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "58px",
  letterSpacing: "0em",
  marginBottom: "14px",
}));

export const ColorButtonFX = styled(Box)((bgColor) => ({
  width: "37px",
  height: "37px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "300ms",
  cursor: "pointer",
  backgroundColor: bgColor ? "#4F4631" : "#000",

  "&:hover": {
    backgroundColor: "#8D7C56",
  },
}));

export const SizeButtonFX = styled(Box)((bgColor) => ({
  width: "86px",
  height: "37px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "300ms",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));

export const CounterFX = styled(Box)(() => ({
  width: "170px",
  height: "52px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "300ms",
  background: "#F0F0F0",
  padding: " 0 14px",
}));

export const PriseFX = styled(Box)(() => ({
  width: "170px",
  height: "52px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "300ms",
  background:
    "linear-gradient(124deg, #57CFC0 0%, rgba(13, 168, 203, 0.90) 100%)",
  padding: " 0 14px",
  color: "#fff",
}));

export const AddToCardFX = styled(Box)(() => ({
  width: "350px",
  height: "52px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "300ms",
  background: "#000",
  padding: " 0 14px",
  color: "#fff",
  flexFlow: 1,
  marginTop: "47px",
}));
