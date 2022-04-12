export default function Training(props) {

  const {training} = props

  return (
    <div className="flex xl:flex-row flex-col break-words">
      <div className="xl:w-1/2 w-full bg-pr-sidebar 4k:p-14 2k:p-10 xl:p-6 p-3 rounded-3xl mr-2 xl:mt-0 mb-3">
        {<h4 className="4k:text-4xl 2k:text-3xl text-lg text-white" dangerouslySetInnerHTML={{__html: training.theory.firstText}}></h4>}
        <ul className="ul-flightschool-single-page px-5 py-3">
          {training.theory.list.map((value, key) => (
              <li key={key + 'theoryList'}>{value}</li>
            ))}
        </ul>
        <h4 className="4k:text-4xl 2k:text-2xl text-lg text-white">{training.theory.secondText}</h4>

      </div>
      <div className="xl:w-1/2 w-full bg-pr-sidebar 4k:p-14 2k:p-10 xl:p-6 p-3 rounded-3xl ml-2 xl:mt-0 mt-3">
        {<h4 className="4k:text-4xl 2k:text-3xl text-lg text-white" dangerouslySetInnerHTML={{__html: training.practical.firstText}}></h4>}
        <ul className="ul-flightschool-single-page px-5 py-3">
          {training.practical.list.map((value, key) => (
            <li key={key + 'practicalList'}>{value}</li>
          ))}
        </ul>
        <h4 className="4k:text-4xl 2k:text-2xl text-base text-pr-primary ">{training.practical.secondText}</h4>
        <h4 className="4k:text-4xl 2k:text-2xl text-base text-pr-primary pt-3">Voraussetzungen:</h4>
        <ul className="ul-flightschool-single-page">
          {training.conditions.list.map((value, key) => (
            <li key={key + 'conditionsList'}>{value}</li>
          ))}
        </ul>
        {training.conditions.text ? <h4 className="4k:text-2xl 2k:text-lg text-xs text-white pt-2">{training.conditions.text}</h4> : <></>}
      </div>
    </div>
  )
}