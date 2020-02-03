import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomeBody from './HomeBody';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <article style={{ maxWidth: '100vw', margin: 0, padding: 0 }}>
      <Helmet>
        <title>Yeux Technologies</title>
        <meta
            name="description"
            content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
          />
          <meta
            property="og:title"
            content="Yeux Technologies"
          />
          <meta
            property="og:description"
            content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
          />
          <meta
            property="og:image"
            content="/logo192.png"
          />
          <meta property="og:url" content="yeux.tech"/>
          <meta property="og:site_name" content="Yeux Technologies"/>
          <meta property="og:type" content="website" />
      </Helmet>
      <HomeBody
        location={location}
      />
    </article>
  )
};

export default App;
