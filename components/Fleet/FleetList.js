export default function FleetList( {airportList} ) {

  return (
    <ul className="w-full xl:w-2/3 px-4 planeCard list-outside text-xs md:text-base ">
      {airportList.map(((value, key) => <li key={value + key}>{value}</li>))}
    </ul>
  )
}