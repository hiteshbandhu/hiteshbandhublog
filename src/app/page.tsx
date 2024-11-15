import About from '@/components/About';
import Header from '@/components/Header';
import Help from '@/components/Help';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import React from 'react';

const Home = () => {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Help/>
      <Footer/>     
    </>
  )
}

export default Home;
