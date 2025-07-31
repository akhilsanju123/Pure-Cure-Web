import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermiteManagement from "./pages/services/TermiteManagement";
import RodentManagement from "./pages/services/RodentManagement";
import CockroachManagement from "./pages/services/CockroachManagement";
import FlyingInsectManagement from "./pages/services/FlyingInsectManagement";
import MosquitoManagement from "./pages/services/MosquitoManagement";
import LizardManagement from "./pages/services/LizardManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/termite-management" element={<TermiteManagement />} />
          <Route path="/services/rodent-management" element={<RodentManagement />} />
          <Route path="/services/cockroach-management" element={<CockroachManagement />} />
          <Route path="/services/flying-insect-management" element={<FlyingInsectManagement />} />
          <Route path="/services/mosquito-management" element={<MosquitoManagement />} />
          <Route path="/services/lizard-management" element={<LizardManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
