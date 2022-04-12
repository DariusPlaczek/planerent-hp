export default function Title({title}) {

  return (
    <section className="w-full flex xl:flex-row flex-col xl:flex-nowrap flex-wrap">
      <h1 className="text-white text-3xl">{title}</h1>
    </section>
  )
}