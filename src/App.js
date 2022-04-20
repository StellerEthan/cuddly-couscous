import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './view/Home';
import MonsterList from './view/MonsterList';
import MonsterStats from './view/MonsterStats';

import "./css/All.css";
import "./css/monsterList.css";
 

const App = () => {
  return(
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/monsters' element={<MonsterList />} />
        <Route path='/monsters/:monsterIndex' element={<MonsterStats />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
