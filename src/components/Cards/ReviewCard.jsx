import { Box, Rating, Typography } from "@mui/material";
import React from "react";
// import PropTypes from 'prop-types'
import "../../components/sliders/style";

const ReviewCard = (props) => {
  const { comments } = props;
  return (
    <Box
      sx={{
        px: "40px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        py: "32px",
        // border: "20px solid #fff",
        background: "#F0F0F0",
        color: "black",
        borderRadius: "50px",
        paddingBottom: "60px",
      }}
    >
      <Rating name="read-only" value={comments.id} readOnly />
      <Typography sx={{ fontSize: "32px" }}>{comments.author}</Typography>
      <Typography sx={{ fontSize: "20px" }}>{comments.quote}</Typography>
    </Box>
  );
};
ReviewCard.propTypes = {};

export default ReviewCard;
