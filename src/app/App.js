import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./pages/auth/context";
import Docs from "./pages/docs";

const App = () => {
  return (
    <div>
      <AuthContext>
        <BrowserRouter>
          <Routes>
            <Route index exact path="/" element={<Docs />} />
          </Routes>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
};

export default App;
