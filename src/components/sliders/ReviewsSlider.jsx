import { Box, Button } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TitleFX } from "./style";
// import PropTypes from 'prop-types'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ReviewCard from "../Cards/ReviewCard";

const ReviewsSlider = (props) => {
  const { title, comments } = props;
  return (
    <Box>
      <TitleFX>{title}</TitleFX>

      <Box sx={{ px: "100px" }}>
        <Swiper
          navigation={true}
          initialSlide={3}
          slidesPerView={3}
          effect={"coverflow"}
          grabCursor={true}
          // loop={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 40,
            modifier: 1,
            slideShadows: true,
            borderRadius: "62px",
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {comments.map((item) => (
            <SwiperSlide style={{ display: "flex" }} key={item.id}>
              <ReviewCard comments={item} />
            </SwiperSlide>
          ))}
          <Button></Button>
        </Swiper>
      </Box>
    </Box>
  );
};

ReviewsSlider.propTypes = {};

export default ReviewsSlider;
