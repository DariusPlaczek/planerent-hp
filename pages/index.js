import {useState, useEffect} from "react";

import useScrollX from "../hooks/useScroolX";
import Slider from "../sections/Slider/Slider";
import Charter from "../sections/Charter/Charter";
import AboutMe from "../sections/AboutMe/AboutMe";
import Contact from "../sections/Contact/Contact";
import MainHeader from "../components/MainHeader/MainHeader";
import ServiceCards from "../components/ServiceCards/ServiceCards";

export default function Home() {

  const scrollX = useScrollX();
  const [isLinkActive, setIsLinkActive] = useState({home: true})
  const [isPlayVideo, setIsPlayVideo] = useState(false)


  useEffect(() => {

    if (isInViewport('homeHash')) {
      setIsLinkActive({home: true});
    }

    if (isInViewport('charterHash')) {
      setIsLinkActive({charter: true});
      setIsPlayVideo(true)

    }

    if (isInViewport('aboutUsHash')) {
      setIsLinkActive({aboutMe: true});

    }

    if (isInViewport('contactHash')) {
      setIsLinkActive({contact: true});
    }

  }, [scrollX]);

  return (
    <>
    <MainHeader active={isLinkActive}>

      <div className="lg:w-main-screen lg:ml-[13rem] w-screen ml-0">

          <>
            <p className="h-3 absolute" id="homeHash"/>
            <Slider/>
          </>

          <>
            <ServiceCards />
          </>

          <>
            <p className="h-3 absolute" id="charterHash"/>
            <Charter/>
          </>

        <>
          <p className="h-3 absolute  " id="aboutUsHash"/>
          <AboutMe />
        </>

          <>
            <p className="h-3 absolute" id="contactHash"/>
            <Contact/>
          </>

    </div>

    </MainHeader>
  </>
  )
}


function isInViewport(element) {
  const rect = document.getElementById(element).getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );

}
