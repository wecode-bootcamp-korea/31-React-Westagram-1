import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hyojeong from "./pages/Hyojeong/Hyojeong";
import Boni from "./pages/Boni/Boni";
import Keun from "./pages/Keun/Keun";
import Noh from "./pages/Noh/Noh";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hyojeong />} />
        <Route path="/" element={<Boni />} />
        <Route path="/" element={<Keun />} />
        <Route path="/" element={<Noh />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
