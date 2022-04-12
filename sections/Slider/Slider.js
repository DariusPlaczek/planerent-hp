import Image from 'next/image'
import Link from "next/link";
import ButtonLI from "../../components/ButtonLI/ButtonLI";

function Slider() {
  return (
    <div className="sections-div relative" id="home">

      <section className="h-screen relative">
        <video
          className="absolute w-screen h-screen object-cover xl:object-fill z-0 opacity-40 top-0 left-0 z-0 "
          autoPlay
          loop
          muted
          src="/images/slider-planerent.webm"
        />


      {/*  <div className="h-screen w-screen bg-pr-sidebar opacity-70" />*/}

        <section className="absolute w-full h-full flex flex-col flex-wrap justify-center items-center 2xl:pt-64 pt-32">
          <img className="sm:w-2/5 w-300 h-auto" src="/images/Logo_PR_AT_650x-white.png" alt="planerent logo"/>
          <h2 className="text-white rounded-full 4k:text-8xl 2k:text-6xl 2xl:text-5xl lg:text-2xl uppercase ">Charter & Flugschule</h2>
          <div className="md:w-1/2 w-full p-3 flex justify-between xl:flex-row flex-col lg:hidden">
            <Link href="/flotte">
              <button className="rounded-button b-red xl:w-1/2 w-full xl:mr-2 mb-1 cursor-pointer" >Charter ein Flugzeug</button>
            </Link>
            <Link href="/flugschule">
            <button className="rounded-button b-transparent xl:w-1/2 w-full xl:ml-2 my-1">So werde ich ein Pilot</button>
            </Link>
           <Link href="/#contact">
            <button className="rounded-button b-darkblue xl:w-1/2 w-full xl:ml-2 mt-1">zum Kontakt</button>
           </Link>
          </div>

        </section>

      </section>
    </div>
  )
}

export default Slider
