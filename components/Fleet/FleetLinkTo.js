import {forwardRef} from "react";


const FleetLinkTo = forwardRef(({ onClick, href, airplanes }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <img className=" object-cover w-full h-16 md:h-24 z-0 rounded-3xl" src={airplanes.imageTop} alt={airplanes.alt} />
      {/*<p className=" text-pr-sidebar text-xxs lg:text-xs z-10 bg-white md:p-2 font-light rounded-b-3xl">{airplanes.name}</p>*/}
    </a>
  )
})

export default FleetLinkTo