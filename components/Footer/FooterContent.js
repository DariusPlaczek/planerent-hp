export default function FooterContent() {

  return (
    <section className="flex flex-grow text-xs px-2 fixed w-full bottom-0 bg-pr-sidebar p-3 text-pr-primary">
      <section className="w-1/2  ">
        <a className="text-white pr-1 text-pr-primary" href="/impressum">Impressum |</a>
        <a className="text-white text-pr-primary" href="/datenschutz">Datenschutz</a>
      </section>
      <p className=" flex flex-grow w-1/2 justify-end pr-5">BÖSING & CORLI AIRCRAFT CHARTER GMBH © 2022 ║ KONZEPTION & DESIGN: DARIUS-DESIGN</p>
    </section>
  )
}