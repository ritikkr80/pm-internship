import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentAuth from "./pages/student/StudentAuth";
import StudentProfile from "./pages/student/StudentProfile";
import StudentDashboard from "./pages/student/StudentDashboard";
import OrganizationAuth from "./pages/organization/OrganizationAuth";
import OrganizationDashboard from "./pages/organization/OrganizationDashboard";
import AdminAuth from "./pages/admin/AdminAuth";
import AdminDashboard from "./pages/admin/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student" element={<StudentAuth />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/organization" element={<OrganizationAuth />} />
          <Route path="/organization/dashboard" element={<OrganizationDashboard />} />
          <Route path="/admin" element={<AdminAuth />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
