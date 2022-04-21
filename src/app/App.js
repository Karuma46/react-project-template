import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./pages/auth/context";
import Docs from "./pages/docs";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import DashBoardTemplate from "./components/dash";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index exact path="/" element={<DashBoardTemplate />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
