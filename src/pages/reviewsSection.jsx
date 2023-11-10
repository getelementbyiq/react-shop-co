import React from "react";
import ReviewsSlider from "../components/sliders/ReviewsSlider";
import { Box } from "@mui/material";
import { BannerPost } from "../components/sectionBetween/components";
// import PropTypes from 'prop-types'

const ReviewsSection = (props) => {
  const { title, comments } = props;
  return (
    <Box>
      <ReviewsSlider title={title} comments={comments} />
    </Box>
  );
};

ReviewsSection.propTypes = {};

export default ReviewsSection;
