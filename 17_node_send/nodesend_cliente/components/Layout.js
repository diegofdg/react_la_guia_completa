import React from 'react';
import Head from 'next/head';

const Layout = ({children}) => {
  return ( 
    <>
      <Head>
        <title>ReactNodeSend</title>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <img src="logo.svg" alt="logo página" />

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <main className="mt-20">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
 
export default Layout;