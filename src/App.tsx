import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Layout } from "@/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { ContactPage } from "@/pages/ContactPage";
import { CareersPage } from "@/pages/CareersPage";
import { InvestorsPage } from "@/pages/InvestorsPage";
import { TermsPage } from "@/pages/TermsPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { PartnersPage } from "@/pages/PartnersPage";
import { HelpPage } from "@/pages/HelpPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
