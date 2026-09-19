// Styles
import './../styles/App.css'
// Librerias
import { useEffect, useState } from 'react';
// Componentes
import {Header} from './Header'
import {Products} from './Products'
import {Footer} from './Footer'

export const App = () => {
  return (
    <>
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </>
  );
}