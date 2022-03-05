import { BrowserRouter, Routes, Route } from "react-router-dom";
import Docs from "./pages/docs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index exact path="/" element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
