import './styles/global.css';
import Head from './components/header/head';
import Foter from './components/footer/footer';
import React from 'react';
import InfContent from './components/body/infoContent';
import Search from './components/body/SearchContent';

const App = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 min-h-screen px-6 md:px-16 flex flex-col font-['Montserrat','sans-serif']">
      <Head></Head>
      <Search></Search>
      <InfContent></InfContent>
      <Foter></Foter>
    </div>
  );
}

export default App;

//nota: para denderizar un componente su nombre debe comenzar con MAYUSCULA, sino no hace nada