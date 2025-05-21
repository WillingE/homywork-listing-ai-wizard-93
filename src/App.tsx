import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "@/routes";

const queryClient = new QueryClient();

/**
 * 路由组件
 * 必须在BrowserRouter内部使用
 */
const AppRoutes = () => useRoutes(routes);

/**
 * 应用根组件
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRoutes />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
