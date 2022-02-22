import React from 'react';
import Head from 'next/head';
import Basic from '../src/Components/Basic'

const Index = () => {

  return (
    <>
      <Head>
        <title>BitBubble</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Basic />
    </>

  );
};

export default Index;
