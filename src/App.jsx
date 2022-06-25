import Header from './shared/components/header';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import Pool from './pages/pool';
import PoolDetails from './pages/pool/[slug]';
import Staking from './pages/staking';
import Claim from './pages/claim';
import Apply from './pages/apply';
import Footer from './shared/components/footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-[10vh] pb-[10vh] text-white">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/pool" element={<Pool />} />
            <Route path="/pool/:poolID" element={<PoolDetails />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </>
  );
};
export default App;
