import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { ContactPage } from "@/pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
