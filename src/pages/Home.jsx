import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Hallway from '../components/Hallway';

const Home = ({ timeline }) => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Hallway />
    </>
  );
};

export default Home;
