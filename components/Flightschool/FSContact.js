import {useState} from 'react'
import {useForm} from 'react-hook-form';

export default function FSContact() {

  const {register, handleSubmit, reset, formState: {errors}} = useForm();

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

    // reset();
    //
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

  return (
    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex flex-col justify-center items-center z-10">
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
      </div>
    </div>

  )
}