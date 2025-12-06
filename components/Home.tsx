import React from 'react';
import Hero from './Hero';
import Highlights from './Highlights';
import Consultation from './Consultation';
import Features from './Features';
import Content from './Content';
import Testimonials from './Testimonials';
import Gallery from './Gallery';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Consultation />
      <Features />
      <Content />
      <Testimonials />
      <Gallery />
    </>
  );
};

export default Home;