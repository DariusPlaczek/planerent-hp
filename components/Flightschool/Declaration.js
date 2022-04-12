export default function Declaration(props) {

  return (
    <div className="flex flex-row">

      <div className="w-full xl:pr-4 break-words">
        {props.declaration.map((value, key) => (
          <div className="flightschool-text pb-6" key={key}><p dangerouslySetInnerHTML={{__html: value}}></p></div>
        ))}
      </div>

    </div>
  )
}