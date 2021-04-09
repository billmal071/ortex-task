import React from 'react';
import { Helmet } from "react-helmet";
import styles from "../../styles/login.module.css";

function NoMatch(): JSX.Element {
  return (
    <div className="bg-404-page w-screen h-screen text-white">
      <Helmet>
        <title>404 | page not found</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center w-screen h-screen z-10">
        <>
          <div className="flex flex-row">
            <div className={`${styles.dot} self-center`}></div>
            <h2 className="text-3xl px-3 uppercase">Error</h2>
            <div className={`${styles.dot} self-center`}></div>
          </div>
          <h1 className="border-b-2 border-white text-9xl pb-2 mb-2 font-mono font-bold">404</h1>
          <p className="capitalize text-2xl font-medium">page not found</p>
          <a href="/" rel="" className="bg-red-700 hover:text-black p-2 mt-2 rounded-lg">Go Home</a>
        </>
      </div>
    </div>
  )
}

export default NoMatch;
