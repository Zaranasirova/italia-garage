import React from 'react';
import AllProducts from '../components/AllProducts';
import Hero from './Section/Hero';
import CenterHeader from '../components/CenterHeader';
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader';
import Footer from '../components/Footer';

const Shop = () => {
  return (
  <>
    <TopHeader/>
  <main>
    <Hero/>
    <CenterHeader/>
    <AllProducts/>
  </main>
  <BottomHeader/>
  <Footer/>
  </>
  )
}

export default Shop