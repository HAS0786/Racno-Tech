import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Main Pages
import Navbar from "./Components/Navbar";
import Home from "./Pages/NavFootPages/Home";
import About from "./Pages/NavFootPages/About";
// import Contact from "./Pages/NavFootPages/Contact";
import Blog from "./Pages/NavFootPages/Blog";
import Team from "./Pages/NavFootPages/Team";

// Services
import SocialMedia from "./Pages/Services/SocialMarketing/SocialMedia";
import SEO from "./Pages/Services/SEO/SEO";
import YoutubeAnim from "./Pages/Services/YoutubeAnim/YoutubeAnim";
import WebsiteDev from "./Pages/Services/Website/WebsiteDev";
import Graphic from "./Pages/Services/Graphic/Graphic";
import DigitalMarketing from "./Pages/Services/DigitalMarketing/DigitalMarketing";
import { Assistant } from "./Pages/Services/Assistant/Assistant";
import WordPress from "./Pages/Services/WordPress/WordPress";
import VideoEditing from "./Pages/Services/VideoEditing/VideoEditing";

// Form
import Form from "./Components/Form/Form";
// Other
import CardsWebsite from "./Pages/Services/Website/CardsWebsite";
import Footer from "./Components/Footer";
import CardsMain from "./Components/Header/CardsMain";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />

        {/* Services */}
        <Route path="/socialMedia" element={<SocialMedia />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/youtubeAnim" element={<YoutubeAnim />} />
        <Route path="/website" element={<WebsiteDev />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/assistant" element={<Assistant/>}/>
        <Route path="/wordpress" element={<WordPress/>}/>
        <Route path="/videoEditing" element={<VideoEditing/>}/>

        {/* Home Page main Cards */}
        <Route path="/Cardsmain" element={<CardsMain />} />
        {/* Websites Card */}
        <Route path="/CardsWebsite" element={<CardsWebsite />} />

        {/* Forms */}
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
