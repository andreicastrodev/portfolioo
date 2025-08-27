import React from 'react';
import Hero from './Hero.jsx';
import FeaturedProjects from './FeaturedProjects.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Footer />
    </main>
  );
};

export default Home;