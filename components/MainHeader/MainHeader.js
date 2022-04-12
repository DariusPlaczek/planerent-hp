import {useState, useEffect} from 'react';
import Head from "next/head";

import Leftsidebar from "../Leftsidebar/Leftsidebar";
import MainNav from "../MainNav/MainNav";
import EuCookieBar from "../EuCookieBar/EuCookieBar";


export default function MainHeader(props) {

  const [isMobilActive, setIsMobilActive] = useState("100%")
  const [isActive, setIsActive] = useState(false)
  const keyStorage = "cookieState"

  const openMobileNav = () => {
    isMobilActive === "0" ? setIsMobilActive("100%") : setIsMobilActive("0");
  }

  useEffect(() => {
    const storage = window.localStorage.getItem(keyStorage);

    if (storage === null || storage === undefined  ) {
      setIsActive(false)
      return
    }

    if (JSON.parse(storage).analytics ) {
      setIsActive(true)
    }

  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pr-color relative">
      <Head>
        <title>PLANERENT - Chartern Sie eine Cirrus SR22 Turbo G3 GTS</title>
        <link rel="icon" href="/pr-favicon.gif"/>
        <meta name="description" content="Chartern Sie eine Cirrus SR22 Turbo G3 GTS" />
       <meta name="keywords" content="Cirrus, SR22, Turbo G3, GTS, Rent, Chater, Aaachen, Maastricht-Aachen, EHBK, Maastricht, EDKA, plane, planerent, plane-rent ,plane charter, plane-charter, Aachen Merzbrück, cirrus aachen, cirus, Cirrus eddk, Cirrus eddl, Cirrus edfh, Cirrus eddf, Cirrus edlw, Cirrus edln, nrw, Essen-Mülheim, essen, Mülheim" />

      </Head>
      <EuCookieBar />
      <header className="fixed top-3 left-0 flex flex-row justify-between w-full h-20 lg:hidden mb-8 z-9000">
        <section className="flex items-center w-mobil-logo-bg h-height-mobil-nav px-3 bg-white rounded-r-3xl shadow-3xl">
          <a className="l" href='/'>
            <img
              src="/images/Logo_pr_WEBklein-hp.png"
              alt="Planerent logo"
              style={{ width: "200px", height: "42px" }}
            />
          </a>
        </section>
        <section className="flex justify-center items-center w-mobil-menu-bg h-height-mobil-nav bg-white rounded-l-3xl shadow-3xl" >
          <button onClick={openMobileNav}>
            <svg viewBox="0 0 100 80" width="28" height="28">
              <rect className="hamburger-menu" width="100" height="8"></rect>
              <rect className="hamburger-menu" y="30" width="100" height="8"></rect>
              <rect className="hamburger-menu" y="60" width="100" height="8"></rect>
            </svg>
          </button>
        </section>
      </header>

      <section className={`w-screen h-screen min-h-screen z-8500 fixed top-0 lg:hidden duration-500 ease-in-out custom-backdrop-filter transform `} style={{left: isMobilActive}} >

        <div className="w-full h-screen flex flex-col items-center pt-32 font-black relative">
          <MainNav active={props.active} />
          <p className="fixed bottom-0 flex flex-grow w-full pr-5 text-sm">BÖSING & CORLI AIRCRAFT CHARTER GMBH © 2022 ║ KONZEPTION & DESIGN: DARIUS-DESIGN</p>
        </div>

      </section>

      <Leftsidebar active={props.active}/>

      {props.children}

    </div>
  )
}

