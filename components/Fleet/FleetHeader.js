import PlaneCardInformation from "../../sections/Flotte/Card/PlaneCardInformation";

export default function FleetHeader( {airplanes} ) {

  return (
    <div className="relative w-full lg:h-96 z-0 top-20 md:top-0 flex md:flex-row flex-col overflow-hidden transition-all duration-500 ease-in-out">
      <div className="w-full h-full" style={{transform: `translate3d(0px, 10px, 0px )`}}>
        <div className="overflow-hidden relative bottom-0 img-before ">
          <img className="" src={airplanes.imageTop}/>
        </div>

        <div className="w-full z-10 flex absolute top-auto bottom-0 h-auto p-3pz md:p-9pz lg:p-9pz xl:p-6pz m-0 flex-wrap box-border items-start text-left gardien">
          <h2 className="text-white lg:text-3xl text-xl">{airplanes.name}</h2>
        </div>
      </div>
      <PlaneCardInformation
        cruise={airplanes.cruise}
        pas={airplanes.pas}
        price={airplanes.price}
        priceBrutto={airplanes.priceBrutto}
      />
    </div>
  )
}