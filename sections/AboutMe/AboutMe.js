export default function AboutMe({playVideo}) {
  
  return (
  <div className="relative" id="aboutUs">

    <div className="flex justify-center items-center relative">
      
       <div className="container mx-auto relative z-10 flex items-center xl:flex-row flex-col mb-10 xl:mb-24 p-5">
        
        <div className="xl:w-1/2 w-full h-full border-8 border-white 2xl:rounded-3xl xl:rounded-l-3xl rounded-t-3xl xl:rounded-tr-none bg-white z-10">
          <img className="w-full h-full object-cover 2xl:rounded-3xl xl:rounded-l-3xl rounded-t-3xl xl:rounded-tr-none" src="/images/corli-boesing-about.jpg"/>
        </div>
        
        <div className="xl:w-1/2 w-full h-full relative">
          <div className="flex flex-col justify-center items-center xl:w-10/12 w-full h-full font-display z-0">
            

            <div className="2xl:mt-3 bg-white p-8 xl:rounded-r-3xl uppercase">
              <h1 className="text-2xl 2k:text-5xl 4k:text-7xl pb-8 "><em className="text-pr-sidebar font-bold">
                Diego Corli</em> & <em className="text-pr-sidebar font-bold">Michael Bösing</em>
              </h1>
              <p className="text-sm 2xl:text-base 2k:text-2xl 4k:text-4xl 4k:font-bold">
                Wir, lernten uns während unserer PPL-Ausbildung kennen. Gemeinsam teilen wir seither
                die Leidenschaft zur Fliegerei. Was uns allerdings bisher fehlte war die
                Möglichkeit, im Raum NRW ein modernes und schnelles Flugzeug mit Glascockpit und
                integriertem Rettungssystem zu chartern. Somit beschlossen wir gemeinsam die
                Anschaffung einer Cirrus SR22 Turbo und gründeten die Bösing & Corli Aircraft
                Charter GmbH.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  
  </div>
  )
}