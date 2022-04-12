import { useState } from 'react'
import useSWR  from 'swr'

import MainHeader from "../components/MainHeader/MainHeader";
import AirportMap from "../components/AirportMap/AirportMap";
import AirportmapCard from "../components/AirportmapCard/AirportmapCard";
import SingleAirportMap from "../components/SingleAirportMap/SingleAirportMap";

const fetcher = async () => {
  const response = await fetch('/api/airports')
  const data = await response.json()
  return data
}

export default function flightmap() {

  const { data, error } = useSWR('airportdata', fetcher)

  const [isLinkActive] = useState({flightmap: true});
  const [airportData, setAirportData] = useState(null);
  const [isInput, setIsInput] = useState({ icao: false, town: false });



  if(error) return 'An Error has occured'
  if(!data) return 'Loading...'

  const filterAirports = (event) => {
    event.preventDefault();

    const icao = event.target.filterIcao.value.toLowerCase();
    const town = event.target.filterTown.value.toLowerCase();

    if(icao === '' && town === '' ) {
      setAirportData(null)
    }

    if (icao !== '') {
      const filter = data.filter(dataValue => dataValue.icao.toLowerCase() === icao);
      setAirportData(filter);
    }

    if (town !== '') {
      const filter = data.filter(dataValue => dataValue.name.toLowerCase() === town);
      setAirportData(filter);
    }

  }

  const setImageToICAO = (event) => {
    const filterICAO = data.filter(dataValue => dataValue.icao.toLowerCase() === event.toLowerCase());
    setAirportData(filterICAO);
  }

  const resetIcao = () => {
    setAirportData(null);
  }

    return (
    <MainHeader active={isLinkActive}>
      <div className="w-full min-h-screen h-full overflow-x-hidden lg:pl-56 mt-24 lg:mt-0">

        <section className="w-full md:h-1/2 flex flex-wrap flex-col ">
          <div className="flex flex-row flex-wrap h-auto pt-2 mb-3">
            {airportQuickClick.map(value => <AirportmapCard key={value.id+value.title+value.icao} title={value.title} icao={value.icao} image={value.image} onClick={() => setImageToICAO(value.icao)} />)}
          </div>

            <form className="flex flex-row flex-wrap justify-center py-6 px-2 flex-wrap lg:h-auto h-auto" onSubmit={filterAirports}>

              <fieldset className="lg:w-1/3 md:w-1/2 w-full h-20">
                <label className="input-label">Stadtname</label>
                <input className="input-field uppercase" type="text" name="filterTown" placeholder="Stadtname" disabled={isInput.town}/>
              </fieldset>

              <fieldset className="lg:w-1/3 md:w-1/2 w-full h-20">
                <label className="input-label">ICAO</label>
                <input className="input-field uppercase" type="text" name="filterIcao" placeholder="ICAO" max="4" disabled={isInput.icao} />
              </fieldset>

              <fieldset className="flex justify-center lg:w-1/3 w-full h-auto">
                <button className="bg-pr-primary hover:bg-gray-600 hover:text-white text-pr-sidebar max-w-96 w-80 lg:w-full h-10 rounded-3xl pt-2 pb-2 mt-3 lg:mt-6 uppercase font-bold lg:ml-2" onClick={resetIcao}>Zeige alle Flughäfen</button>
              </fieldset>

              <button className="bg-pr-secondery hover:bg-red-700 text-white max-w-96 w-80 h-10 rounded-3xl pt-2 pb-2 mt-3 lg:mt-6 uppercase font-bold lg:ml-2" type="submit"> Filtern </button>

            </form>

        </section>

        <section className="w-full md:h-1/2 h-96 ">
          {airportData === null || airportData === "" ? <AirportMap airports={data} singelMap={false}/> : <SingleAirportMap airport={airportData} />}
        </section>

      </div>
      </MainHeader>
  )
}

const airportQuickClick = [
    {id: "1", title: "Köln", icao: "EDDK", image: "cologne_640.jpg"},
    {id: "2", title: "Berlin", icao: "EDDB", image: "brandenburg_640.jpg"},
    {id: "3", title: "München", icao: "EDDM", image: "munich_640.jpg"},
    {id: "4", title: "Hamburg", icao: "EDDH", image: "hamburg_640.jpg"},
    {id: "5", title: "Frankfurt", icao: "EDDF", image: "frankfurt_640.jpg"},
    {id: "6", title: "Düsseldorf", icao: "EDDL", image: "dusseldorf_640.jpg"}
]
