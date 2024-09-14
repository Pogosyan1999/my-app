import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <>
     <Header/>
     <main className='container'>
       <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default Layouts