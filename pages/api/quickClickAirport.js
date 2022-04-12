export default function quickClickAirport(req, res) {
  res.status(200).json([
    {id: "1", title: "Köln", icao: "EDDK", image: "cologne_640.jpg"},
    {id: "2", title: "Berlin", icao: "EDDB", image: "brandenburg_640.jpg"},
    {id: "3", title: "München", icao: "EDDM", image: "munich_640.jpg"},
    {id: "4", title: "Hamburg", icao: "EDDH", image: "hamburg_640.jpg"},
    {id: "5", title: "Frankfurt", icao: "EDDF", image: "frankfurt_640.jpg"}
  ])}