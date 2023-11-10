import styled from "@emotion/styled";
import { Box, Chip, Rating, Typography } from "@mui/material";

export const ProductWrapper = styled(Box)(() => ({
  marginBottom: "40px",
  backgroundColor: "rgba(0,0,0,0.04)",
  borderRadius: "20px",
  padding: "8px",
  cursor: "pointer",
}));

export const ImageWrapper = styled(Box)(() => ({
  width: "295px",
  height: "298px",
  borderRadius: "20px",
  overflow: "hidden",
}));

export const ProductImageFX = {
  objectFit: "cover",
  height: "100%",
  width: "100%",
  transform: "scale(1.1)",
};

export const ProductTitle = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 700,
  lineHeight: "27px",
  letterSpacing: "0em",
  textAlign: "left",
  maxWidth: "295px",
  marginTop: "16px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

export const ProductNewPrice = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "32px",
  letterSpacing: "0em",
  textAlign: "left",
}));

export const ProductOldPrice = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "32px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "rgba(0,0,0,0.4)",
  textDecoration: "line-through",
}));

export const ProductPrecentege = styled(Chip)(() => ({
  fontSize: "16px",
  backgroundColor: "#FF33331A",
  fontWeight: 500,
  lineHeight: "16px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#FF3333",
}));

export const PrecentWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));

export const RatingFX = styled(Rating)(() => ({
  marginTop: "16px",
  marginBottom: "16px",
}));
