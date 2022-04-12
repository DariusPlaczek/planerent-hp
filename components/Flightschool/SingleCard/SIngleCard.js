export default function SingleCard({title, subtitle, image, buttonTitle, description, link}) {

  return (
    <a className="w-auto md:w-96 4k:w-650 2k:w-500 h-auto p-4 lg:p-6" href={`/flugschule/${link}`}>
      <div className="relative flex flex-col min-w-0 break-words bg-pr-sidebar w-full mb-2 shadow-lg rounded-3xl shadow-3xl">
        <img alt="..."
             src={image}
             className="object-cover w-full 4k:max-h-72 2k:max-h-64 max-h-48 align-middle rounded-t-3xl" />
          <blockquote className="relative p-8 mb-4">
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 150"
                 className="absolute left-0 w-full 2k:hidden lg:block top-fiftyone hidden">
              <polygon points="-70,95 583,0 583,90" className="text-pr-sidebar fill-current" />
            </svg>

            <section className="h-12 min-h-12">
              <h4 className="4k:text-4xl 2k:text-2xl text-lg font-bold text-white">
                {subtitle}
              </h4>
              <h5 className="4k:text-2xl 2k:text-xl text-sm font-bold text-pr-secondery">
                {title}
              </h5>
            </section>
            <p className="4k:text-2xl 2k:text-lg text-base font-light 4k:mt-10 2k:mt-6 mt-2 text-white 4k:h-40 2k:h-36 h-32 min-h-32">
              {description}...
            </p>
            <div className="4k:text-2xl 2k:text-xl mt-4 b-red 2k:p-3 2k:pl-6 p-2 pl-4 rounded-3xl w-full">{buttonTitle}</div>
          </blockquote>
      </div>
    </a>


  )
}