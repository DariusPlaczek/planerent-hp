import {useState, useEffect} from "react";

export default function EuCookieBar() {

  const [isActive, setIsActive] = useState( false)
  const date = 1648489766150
  const keyStorage = "cookieState"


  useEffect(() => {
    const storage = window.localStorage.getItem(keyStorage);

    if (storage === null || storage === undefined  ) {
      setIsActive(true)
      return
    }

    if (date !== JSON.parse(storage).value ) {
      setIsActive(true)
      return
    }

  }, []);

  const cancel = () => {
    const states = {value: date, analytics: false }
    window.localStorage.setItem(keyStorage, JSON.stringify(states))
    setIsActive(false)
  }

  const accept = () => {
    const states = {value: date, analytics: true }
    window.localStorage.setItem(keyStorage, JSON.stringify(states))
    setIsActive(false)
  }

  return (
    <>
    {isActive ?
        <div className="fixed lg:top-10 top-24 lg:left-1/2 rounded-lg bg-white shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[450px] z-9000 overflow-hidden">
            <div className="relative overflow-hidden px-8 pt-8">
              <div className="text-2xl flex flex-col pb-4">
                <span className="text-2xl font-bold">Wir wollen unsere Homepage besser machen. Helfen Sie uns!</span>

              </div>
              <div className="pb-4">
                <p>Unsere Seite nutzt Statistik-Cookies von Google Analytics. Das Tool hilft uns zu verstehen, wie Besucher mit unserer Webseite interagieren, indem Information anonym gesammelt und gemeldet werden.</p>
                <p>Weitere Information finden Sie unter <a className="underline" href="/datenschutz">Datenschutz</a></p>
              </div>
            </div>


          <div className="w-full flex justify-center items-center border-t border-solid border-gray-200">
            <button className="border-r border-gray-200 flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-red-400 duration-150" onClick={() => cancel()}>
              Ablehnen
            </button>
            <button className="flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-blue-800 duration-150" onClick={() => accept()}>
              Akzeptieren
            </button>
          </div>
        </div>
        :
        <></>
    }
    </>
  )
}
