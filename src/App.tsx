import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppRouter } from "./router";


import JapanPolinaItinerary from "./pages/JapanPolinaItinerary";
import AboutUs from "./pages/AboutUs";
import BookingPage from "./pages/booking/BookingPage";

// Footer-linked pages
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import TermsConditions from "./pages/TermsConditions";
import PreDepartureInfo from "./pages/PreDepartureInfo";
import TravelSafety from "./pages/TravelSafety";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<JapanPolinaItinerary />} />
          <Route path="/japan-polina-itinerary" element={<JapanPolinaItinerary />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Booking */}
          <Route path="/booking/:slug" element={<BookingPage />} />

          {/* Footer pages */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/pre-departure" element={<PreDepartureInfo />} />
          <Route path="/travel-safety" element={<TravelSafety />} />

          {/* Redirect any old URLs back to the Japan page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Footer on every page */}
      </AppRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
