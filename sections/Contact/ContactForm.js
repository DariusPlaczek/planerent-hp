import {useState} from 'react'
import {useForm} from 'react-hook-form';
import {findRenderedComponentWithType} from "react-dom/test-utils";

export default function ContactForm() {
  
  const {register, handleSubmit, reset, formState: {errors}} = useForm();
  const [contactForm, setContactForm] = useState("charter");
  const [contactFormColor, setContactFormColor] = useState({change: 'bg-red-700', charter: 'bg-red-700', school: 'bg-pr-color' });


  const onSubmit = (data, event) => {

    let mailData = {
      name: data.name,
      email: data.email,
      telefonnummer: data.Telefonnummer,
      message: data.message,
      lizenz: data.plane,
      mail: data.hemail,
      web: data.hwebsite
    }

    reset();

    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mailData)
    }).then((res) => {
      //console.log('Response received')
      if (res.status === 200) {
        //console.log('Response succeeded!')
      }
    })

  }
  
  const changeContactForm = (event) => {
    switch (event.target.value) {
      case "charter":
        setContactFormColor({change: 'bg-pr-color', charter: 'bg-red-700', school: 'bg-pr-color' })
        break;
      case "school":
        setContactFormColor({change: 'bg-pr-color', charter: 'bg-pr-color', school: 'bg-red-700' })
        break;
        
      default:
        setContactFormColor({change: 'bg-pr-color', charter: 'bg-red-700', school: 'bg-pr-color' })
    }
    
    setContactForm(event.target.value)
    
  }
  
  const planeRentContact = () => {
  
    switch (contactForm) {
      case "charter":
        return (
        <>
          <section className="flex flex-row flex-wrap">
      
            <fieldset className="mb-4 mr-0 w-full p-1">
              <label className="input-label">Flugzeug</label>
              <select
              className="input-field"
              name="plane"
        
              {...register("plane")}
              >
                <option value="Cirrus">CIRRUS SR22 TURBO G3 GTS</option>
                <option value="Piper">PIPER PA28-181 ARCHER II</option>
              </select>
      
            </fieldset>

          </section>
        </>
        )
      case "school":
        return (
          <fieldset className="mb-4 mr-0 w-full p-1">

            <label className="input-label">Lizenz</label>
            <select
              className="input-field"
              name="lizenz"

              {...register("plane")}
            >
              <option value="PPL">Linzenz für Privatpiloten PPL</option>
              <option value="LAPLA">Leichtluftfahrzeug-Pilotenlizenz (LAPL(A))</option>
            </select>

          </fieldset>
        )
        
      default:
      return (
        <section className="flex flex-row flex-wrap">

          <fieldset className="mb-4 mr-0 w-full p-1">
            <label className="input-label">Flugzeug</label>
            <select
              className="input-field"
              name="plane"

              {...register("plane")}
            >
              <option value="Cirrus">CIRRUS SR22 TURBO G3 GTS</option>
              <option value="Piper">PIPER PA28-181 ARCHER II</option>
            </select>

          </fieldset>

        </section>
      )
    }
  }
  
  
  
  
  return (
  <>
    <section className="flex w-full lg:w-1/2 justify-center mb-6 px-3">
      {/*<button value="general" className={`contact-button rounded-l-3xl mr-1 ${contactFormColor.change}`} onClick={(event) => changeContactForm(event)} >Charter Anfrage</button>*/}
      <button value="charter" className={`contact-button rounded-l-3xl mr-1 ${contactFormColor.charter}`} onClick={(event) => changeContactForm(event)}>Charter Anfrage</button>
      <button value="school" className={`contact-button rounded-r-3xl ml-1 ${contactFormColor.school}`} onClick={(event) => changeContactForm(event)}>Flugschule Anfrage</button>
    </section>
    <form className="flex flex-col w-full lg:w-1/2 px-3 pb-10" onSubmit={handleSubmit(onSubmit)}>
      <section className="flex md:flex-row flex-col flex-wrap">
        <fieldset className="mb-4 order-1 md:order-1 mr-0 w-full md:w-1/2 xl:w-1/3 p-1">
          <label className="input-label">Name*</label>
          
          <input
          className="input-field"
          type="text"
          {...register("name", {required: true, min: 3, maxLength: 20})}
          />
          {errors.name && errors.name.type === "required" && (
          <span className="text-white text-xs">
              Plichtfeld
             </span>
          )}
        </fieldset>
        
        <fieldset className="mb-4 order-2 md:order-3 mr-0 w-full md:w-full xl:w-1/3 p-1">
          <label className="input-label">Email*</label>
          <input
          className="input-field"
          type="text"
          
          {...register("email", {required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}
          />
          {errors.email && errors.email.type === "required" && (
          <span className="text-white text-xs">
              Plichtfeld
            </span>
          )}
          {errors.email && errors.email.type === "pattern" && (
          <span className="text-red-500 pb-2 mb-4 text-xs">Bitte eine gültige Email eingeben</span>
          )}
        </fieldset>

        <fieldset className="mb-4 w-full order-3 md:order-2  md:w-1/2 xl:w-1/3 p-1">
          <label
            className="input-label">Telefonnummer*</label>
          <input
            className="input-field"
            type="number"

            {...register("Telefonnummer", {required: true, maxLength: 20})}
          />
          {errors.number && errors.number.type === "required" && (
            <span className="text-white text-xs">
              Plichtfeld
            </span>
          )}
          {errors.number && errors.number.type === "pattern" && (
            <span className="text-red-500 pb-2 mb-4 text-xs">Es ist keine Gültige Telefonnummer</span>
          )}
        </fieldset>
      </section>
      
      {planeRentContact()}
      
      
      <fieldset className="mb-4">
        
        <label
        className="input-label">Ihre Nachricht</label>
        <textarea
        className="textarea-field h-64"
        
        {...register("message", {required: true})}
        />
        {errors.message && errors.message.type === "required" && (
        <span className="text-white text-xs">
              Plichtfeld
            </span>
        )}
      </fieldset>

      <fieldset className="mb-4">
        <input
          type="checkbox"
          placeholder="privatyRadio"
          {...register("privatyRadio", {required: true})}
        />
        <span className="w-full break-words pl-3 text-white text-sm">
            * Sie willigen hiermit in die Verarbeitung wie auch Speicherung Ihrer angegebenen personenbezogenen Daten für die Bearbeitung der Anfrage ein. Die angegebenen Daten werden ausschließlich für die Bearbeitung Ihrer Anfrage genutzt und danach gelöscht. Eine Weitergabe an Dritte erfolgt nicht. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Im Falle des Widerrufs werden Ihre Daten umgehend gelöscht.
          </span>
        {errors.privatyRadio && (
          <p className="text-white text-xs">
            Plichtfeld
          </p>
        )}

      </fieldset>


      <section className="invisible">
        <input type="text" placeholder="website"
               {...register("hwebsite")}
        />
      </section>

      <section className="invisible">
        <input type="text" placeholder="email"
               {...register("hemail")}
        />
      </section>
      <p className="text-white pb-2 ">*Pflichtfelder</p>
      
      <button className="w-full rounded-button b-red" type="submit"> Abschicken! </button>
      
    </form>
  </>
  )
  
}

