import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import { CssBaseline } from "@mui/material";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route>
              <Route element={<MainLayout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="products/:id" element={<ProductDetails />} />
                {/* <Route path="shop" element={<ShopPage />} />
                <Route path="on-sale" element={<OnSalePage />} />
                <Route path="new-arrivals" element={<NewArrivalsPage />} />
                <Route path="brands" element={<Brandspage />} />
                <Route path="profile/:id" element={<ProdilePage />} />
                <Route path="products/:id" element={<ProtuctDetails />} /> */}
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
