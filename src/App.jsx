// App.jsx
// Main entry for the Collage Website frontend, using Tailwind CSS and React.

import React, { useState } from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Faculty from './Components/Faculty/Faculty';
import Alumni from './Components/Alumni/Alumni';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="OUR FACULTY" title="Meet Our Educators" />
        <Faculty />
        <Title subTitle="OUR ALUMNI" title="Our Prestigious Graduates" />
        <Alumni />
        <Title subTitle="TESTIMONIALS" title="What Students Say" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;