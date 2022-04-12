export default function Declarations({declarationState}) {

  return (
    <>
      {declarationState.map((value, key) => (
        <div className="text-pr-primary pt-2" key={key}><p dangerouslySetInnerHTML={{__html: value}}></p></div>
      ))}
      <h3 className="uppercase 2k:text-4xl text-2xl text-pr-secondery 2k:py-6 py-3 pl-6 bg-pr-sidebar my-5 rounded-3xl">Ausbildung:</h3>
    </>
  )
}