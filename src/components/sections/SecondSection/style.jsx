import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const SecondSectionTitle = styled(Typography)(() => ({
  fontFamily: "Integral CF Regular",
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "58px",
  letterSpacing: "0em",
  textAlign: "center",
  marginBottom: "55px",
}));

export const ProductContainer = styled(Box)(({ theme, isOpen }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  padding: "0 100px",
}));

export const SecondSectionContainer = styled(Box)(() => ({
  marginTop: "72px",
  marginBottom: "64px",
}));
