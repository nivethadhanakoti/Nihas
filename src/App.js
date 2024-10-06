import "./App.css";
import HomeAbout from './components/HomeAbout/HomeAbout';
import Navbar from './components/Navbar/Navbar';
import Services from "./components/Services/Services";
import Bouquet from './components/Bouquet/Bouquet';
import BridalFlower from './components/BridalFlower/BridalFlower'; 
import CarDecoration from './components/CarDecoration/CarDecoration'; 
import ChocolateBouquet from './components/ChocolateBouquet/ChocolateBouquet'; 
import FloralJewellery from './components/FloralJewellery/FloralJewellery'; 
import Gajra from './components/Gajra/Gajra'; 
import Garland from './components/Garland/Garland'; 
import HouseWarming from './components/HouseWarming/HouseWarming'; 
import Puberty from './components/Puberty/Puberty'; 
import Trousseau from './components/Trousseau/Trousseau'; 
import Wreath from './components/Wreath/Wreath'; 
import Wedding from './components/Wedding/Wedding'; 
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Cart from './components/Cart/Cart';
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<HomeAbout />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bouquet" element={<Bouquet />} />
          <Route path="/bridal-flower" element={<BridalFlower />} />
          <Route path="/car-decoration" element={<CarDecoration />} />
          <Route path="/chocolate-bouquet" element={<ChocolateBouquet />} />
          <Route path="/floral-jewellery" element={<FloralJewellery />} />
          <Route path="/gajra" element={<Gajra />} />
          <Route path="/garland" element={<Garland />} />
          <Route path="/house-warming" element={<HouseWarming />} />
          <Route path="/puberty" element={<Puberty />} />
          <Route path="/trousseau" element={<Trousseau />} />
          <Route path="/wreath" element={<Wreath />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/shop" 
            element={<Shop cartCount={cartCount} setCartCount={setCartCount} setCartItems={setCartItems}/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" 
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
