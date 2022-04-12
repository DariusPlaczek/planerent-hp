import AirportMap from "../../components/AirportMap/AirportMap";
import SingleAirportMap from "../../components/SingleAirportMap/SingleAirportMap";

const ourAirport = [
  {
    id: "125",
    icao: "EDLE",
    name: "Essen",
    koordinaten: {lat: 51.40356407005574, lng: 6.938295322591496},
    country: "Deutschland"
  }
]

export default function SingleFlightmap() {

  return (
    <SingleAirportMap airport={ourAirport} />
  )
}