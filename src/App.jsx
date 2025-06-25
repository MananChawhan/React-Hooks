 import React from 'react'
import { Routes, Route } from 'react-router-dom';

// UseState

import StateHome from './UseState/StateHome';
import NavbarForUseState from './UseState/NavbarForUseState';
import ApiDataFetch from './UseState/ApiDataFetch';
import ArtGallery from './UseState/ArtGallery';
import Cart from './UseState/Cart';
import Card from './UseState/Card';
import Counter from './UseState/Counter';
import Emoji from './UseState/Emoji';
import Formvalidation from './UseState/Formvalidation';
import Tweet from './UseState/Tweet';


// UseRef

import UseRef from './UseRef/UseRef';
import RefHome from './UseRef/RefHome';
import Navbarforuseref from './UseRef/Navbarforref';
import UserefPrev from './UseRef/UserefPrev';
import Otp from './UseRef/Otp';
import Navbar from './Navbar';
import Home from './Home';
import WallpaperCarousel from './UseRef/WallpaperCarousel';

// UseMemo

import UseMemoEx1 from './UseMemo/UseMemoEx1';
import ProductResult from './UseMemo/ProductResult';
import MemoHome from './UseMemo/MemoHome';

// UseEffect
import EffectHome from './UseEffect/EffectHome';
import UseEffect from './UseEffect/UseEffect';
import NavbarForUseEffect from './UseEffect/NavbarForUseEffect';
import AutoRefreshclock from './UseEffect/AutoRefreshClock';
import FormAutoSaver from './UseEffect/FormAutoSaver';
import Online from './UseEffect/Online';
import AutoDarkMode from './UseEffect/AutoDarkMode';
import FormValidation from './UseState/Formvalidation';

 const App = () => {
   return (   
     <div>
      <Routes>
        <Route path="/" element={<Home/>}/>

        {/* Use-State */}

        <Route path="statehome" element={<StateHome/>}/>
        <Route path="navbarforusestate" element={<NavbarForUseState/>}/>
        <Route path="apidatafetch" element={<ApiDataFetch/>}/>
        <Route path="artgallery" element={<ArtGallery/>}/>
        <Route path="card" element={<Card/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="emoji" element={<Emoji/>}/>
        <Route path="formvalidation" element={<Formvalidation/>}/>
        <Route path="tweet" element={<Tweet/>}/>

        {/* Use-Ref */}
        
        <Route path="refhome" element={<RefHome/>}/>
        <Route path="navbarforuseref" element={<Navbarforuseref/>}/>
        <Route path="useref" element={<UseRef/>}/>
        <Route path="userefprev" element={<UserefPrev/>}/>
        <Route path="otp" element={<Otp/>}/> 
        <Route path="navbar" element={<Navbar/>}/> 
        <Route path="tweet" element={<Tweet/>}/> 
        <Route path="wallpaper" element={<WallpaperCarousel/>}/> 
        
        {/* Use-Memo */}
        
        <Route path="usememoex1" element={<UseMemoEx1/>}/> 
        <Route path="usememoex2" element={<ProductResult/>}/> 
        <Route path="memohome" element={<MemoHome/>}/>
        
         {/*Use-Effect*/}
        
        <Route path="/effecthome" element={<EffectHome/>}/>
        <Route path="/effect" element={<UseEffect/>}/>
        <Route path="/navbarforuseeffect" element={<NavbarForUseEffect/>}/>
        <Route path="/clock" element={<AutoRefreshclock/>}/>
        <Route path="/autosaver" element={<FormAutoSaver/>}/>
        <Route path="/online" element={<Online/>}/>
        <Route path="/autodark" element={<AutoDarkMode/>}/>
        </Routes>
     </div>
   )
 }
 
 export default App