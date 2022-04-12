export default function List({ listData }) {

  return (
    <ul className="ul-flightschool-single-page px-3 py-3">
      {listData.map((value, key) => (
        <li key={key + 'practicalList'}>{value}</li>
      ))}
    </ul>
  )
}