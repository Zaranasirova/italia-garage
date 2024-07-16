import React from 'react';

import AllProducts from '../components/AllProducts';
import Hero from './Hero';
import CenterHeader from '../components/CenterHeader';

const Shop = () => {
  return (
  <main>
    <Hero/>
    <CenterHeader/>
    <AllProducts/>
  </main>
  )
}

export default Shop