/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import homeStyles from '../styles/Home.module.css';


{/* TIP: CHECK THE TYPES FOLDER ---------------------------*/}
const Home = ({}) => {
  /* IMPLEMENT FETCH (ONLY RICK AND MORTY CHARACTERS) ---------------------- */

  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Rick & Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* SHOW RICK & MORTY IMAGES ----------------------------- USE CORRECT HTML TAGS (HELP WITH THE CLASSNAMES)*/}
      <div className="heading section">
        <div style={{ marginBottom: '50px' }} className="text-heading-level-1">
          Welcome to the Rick And Morty App
        </div>
        <div className={[homeStyles.charImgContainer, 'main-container'].join(' ')}>
          {/* IMAGES SHOULD HAVE THE charImg CLASSNAME COMMING FORM homeStyles STYLESHEET ---------------------------*/}
        </div>
      </div>
      <div className="paragraph">
        This application will give you all the information about every character
        in Rick & Morty animated series, so if you are a fan this will be your
        favorite application from now on, ENJOY IT.
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
