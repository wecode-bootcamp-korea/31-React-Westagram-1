import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Nav
//import Nav from '../components/Nav/Nav/';

// Boni
import LoginBoni from './pages/Boni/Login/Login';
import MainBoni from './pages/Boni/Main/Main';

//Hyojeong
import LoginHyojeong from './pages/Hyojeong/Login/Login';
import MainHyojeong from './pages/Hyojeong/Main/Main';

//Keun
import LoginKeun from './pages/Keun/Login/Login';
import MainKeun from './pages/Keun/Main/Main';

//Noh
import LoginNoh from './pages/Noh/Login/Login';
import MainNoh from './pages/Noh/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/boni/login" element={<LoginBoni />} />
        <Route path="/boni/main" element={<MainBoni />} />
        <Route path="/hyojeong/login" element={<LoginHyojeong />} />
        <Route path="/hyojeong/main" element={<MainHyojeong />} />
        <Route path="/keun/login" element={<LoginKeun />} />
        <Route path="/keun/main" element={<MainKeun />} />
        <Route path="/noh/login" element={<LoginNoh />} />
        <Route path="/noh/main" element={<MainNoh />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
