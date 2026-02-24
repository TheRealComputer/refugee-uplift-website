import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Team from "./pages/Team";
import CarDonations from "./pages/CarDonations";
import OurStory from "./pages/OurStory";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// Archived pages - kept in codebase but removed from navigation
// import Updates from "./pages/Updates";
// import GetInvolved from "./components/GetInvolved";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/car-donations" element={<CarDonations />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/team" element={<Team />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
