import React, { useContext } from 'react'
import { MainContext } from '../utils/MainContext'
import LoginPage from './Section/LoginPage';
import BottomHeader from '../components/Headers/BottomHeader';
import Footer from '../components/Footer/Footer';
import TopHeader from '../components/Headers/TopHeader';

const OAuth = () => {
 
  
  return (
  <>
  <TopHeader/>
  <main>
    <LoginPage/>
  </main>
  <BottomHeader/>
  <Footer/>
  </>
    
  )
}

export default OAuth