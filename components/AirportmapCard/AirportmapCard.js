export default function AirportmapCard({title, icao, image, onClick}) {



  return (
    <section className="w-1/3 h-12 lg:w-40 lg:h-40 px-0.5 pb-6 md:relative lg:m-1 cursor-pointer" onClick={onClick} >
      <div className=" lg:rounded-3xl">
        <img className="md:absolute hidden lg:block object-cover w-full h-full z-0 rounded-3xl" src={`/images/airports/${image}`} alt={title}/>
        <div className="h-10 w-full md:absolute bottom-0 flex justify-center flex-col bg-pr-secondery z-10 backdrop-filter backdrop-blur-md px-3 uppercase text-white lg:rounded-b-3xl rounded-3xl">
          <h4 className="text-xs">{title}</h4>
          <p className="text-xs">{icao}</p>
        </div>
      </div>
    </section>

  )
}