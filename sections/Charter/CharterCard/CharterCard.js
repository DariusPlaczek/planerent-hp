import ButtonLI from "../../../components/ButtonLI/ButtonLI";

export default function CharterCard({ playVideo = true }) {
  return (
    <div className="sections-div relative">
      <div className="flex justify-center items-center md:min-h-screen h-full ">

        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full z-0 opacity-90">
          <p className="charter-bg"/>
        </div>

      <div className="flex flex-col flex-nowrap md:h-full 2xl:w-1/2 xl:w-3/4 w-full bg-pr-color z-10 p-2 text-white">

        <img className="w-full h-1/3 object-cover rounded-3xl" src="/images/Corli_Flug_Essen-Siegen-1920x.jpg" alt="planerent cirrus sr 22 charter" />
        <h3 className="pl-2 pt-6 text-2xl xl:text-4xl">CHARTER</h3>
        <h4 className="pt-4 pl-2 pr-2 text-xl xl:text-3xl">Ab <em className="text-pr-secondery">Essen-Mülheim (EDLE)</em> verchartern wir</h4>
        <h4 className="pl-2 pr-2 xl:text-xl text-base">eine <em className="text-pr-secondery">Cirrus SR22 Turbo G3 GTS</em> & eine <em className="text-pr-secondery">Piper PA28-181 Archer II.</em></h4>

          <ul className="xl:text-base text-sm p-6 list-inside custom-list-style h-auto">
            <li>Einfache Flugzeugreservierung über Online-Buchungssystem</li>
            <li>Einweisung durch erfahrene Fluglehrer auf dem Muster</li>
            <li>Flexibler Anmietzeitraum (Stunden/Tage/Wochen)</li>
            <li>„Trocken“ Charter: Sie übernehmen das Flugzeug mit einer „Standard Betankung“ und so übergeben Sie es auch wieder an uns
              zurück.
            </li>
            <li>Individuelle Anlieferung nach Absprache möglich</li>
          </ul>

        <div className="pl-2 pr-2 w-full flex sm:flex-row flex-col sm:pb-0 pb-12 ">
          <a className="w-full sm:w-1/2 b-gray py-2 sm:rounded-l-3xl rounded-3xl mb-2 sm:mb-0 mr-0 sm:mr-2 text-center" href='/flotte/#cirrus'>
            <h2 className="2xl:text-2xl text-xl">Cirrus SR22 Turbo G3 GTS</h2>
          </a>

          <a className="w-full sm:w-1/2 b-red py-2 sm:rounded-r-3xl rounded-3xl mt-2 sm:mt-0 ml-0 sm:ml-2 text-center" href='/flotte/#piper'>
            <h2 className="2xl:text-2xl text-xl">Piper PA28-181 Archer II</h2>
          </a>
        </div>

        </div>

      </div>

    </div>
  );
}
