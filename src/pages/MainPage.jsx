import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import <<FirstSection from "../components/sections/FirstSection/FirstSection";
import { BannerPost, BrandsTab } from "../components/sectionBetween/components";
import SecondSection from "../components/sections/SecondSection/SecondSection";
import { API } from "../requester";
import ThirdSection from "../components/sections/Thirdsection/ThirdSection";
import ReviewsSection from "./reviewsSection";
import Footer from "../components/sections/Footer/Footer";
import { useNavigate } from "react-router-dom";
const MainPage = (props) => {
  const [newProducts, setNewProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [topReviews, setTopReviews] = useState([]);

  const getReviews = useCallback(async () => {
    const response = await API.get("quotes", { params: { limit: 15 } });
    setTopReviews(response.data.quotes);
  }, []);

  const getProducts = useCallback(async () => {
    const response = await API.get("products", { params: { limit: 100 } });
    const filterNewProducts = response.data.products.filter(
      (item) => item.discountPercentage < 4 && item.rating < 4.95
    );
    const filterTopProducts = response.data.products.filter(
      (item) => item.rating > 4.9 && item.discountPercentage > 4
    );
    setNewProducts(filterNewProducts);
    setTopProducts(filterTopProducts);
  }, []);
  console.log("topReviews:", topReviews);
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <Box>
      <FirstSection title="FIND CLOTHES THAT MATCHES YOUR STYLE" />
      <BrandsTab />
      <SecondSection title="New Arrivals" products={newProducts} />
      <SecondSection title="Top Sellings" products={topProducts} />
      <ThirdSection title="BROWSE BY dress STYLE" />
      <ReviewsSection title="OUR HAPPY CUSTOMERS" comments={topReviews} />
      <Box
        sx={{
          px: "100px",
          transform: "translateY(50%)",
          position: "relative",
        }}
      >
        <BannerPost />
      </Box>
      <Footer title="Shop.co" />
    </Box>
  );
};

MainPage.propTypes = {};

export default MainPage;
