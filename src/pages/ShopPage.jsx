import React from 'react';
import AllProducts from '../components/AllProducts';
import Hero from './Section/Hero';
import CenterHeader from '../components/CenterHeader';
import TopHeader from '../components/Headers/TopHeader';
import BottomHeader from '../components/Headers/BottomHeader';
import Footer from '../components/Footer';


const ShopPage = () => {
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

export default ShopPage