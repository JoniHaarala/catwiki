import './styles/global.css';
import Head from './components/head';
import React from 'react';
const App = () => {
  return (
    <div className="px-16 bg-slate-50 dark:bg-gray-900">
      <Head></Head>
    </div>
  );
}

export default App;

//nota: para denderizar un componente su nombre debe comenzar con MAYUSCULA, sino no hace nada