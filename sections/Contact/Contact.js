import ContactForm from "./ContactForm";


export default function Contact() {
  

  
  return (
  <div className="sections-div relative" id="contact">
    
    <div className="flex justify-center items-center w-full min-h-screen h-full ">
      
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <span className="contact-bg absolute"/>
      </div>
      
      <div className="flex flex-col justify-center items-center z-10 pt-12">

        <h3 className="text-white lg:text-base text-sm">HABEN SIE NOCH FRAGEN?</h3>
        <h2 className="text-white lg:text-5xl text-2xl mb-8">KONTAKTIEREN SIE UNS</h2>
        <p className="text-sm text-pr-primary mb-8 text-center px-2">Für Fragen, Beratung und weitere Informationen stehen wir Ihnen gerne zur Verfügung. Senden Sie uns eine E-Mail an</p>
        <h2 className="text-pr-secondery md:text-5xl text-2xl mb-8">info@planerent.de</h2>
        <p className="text-sm text-pr-primary mb-8 text-center px-2">oder nutzen Sie folgendes Kontaktformular, wir werden schnellstmöglich Kontakt zu Ihnen aufnehmen.</p>
        <ContactForm />
      
      </div>
    </div>
  </div>
  )
}