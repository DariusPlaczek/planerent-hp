import Link from "next/link";

export default function ServiceCards() {

  return (
    <section className="hidden lg:flex justify-center h-48 lg:h-64 2k:h-96 4k:h-500 -mt-16 xl:-mt-36 mb-10 relative z-30 ">
      <div className="flex justify-center w-full xl:w-8/12 h-full">

        <Link href="/flotte" passHref>
          <div className="singelServiceCard cursor-pointer hover:scale-105 transition ease-in-out delay-150">
            <img className="singleServiceCardImage" src="/images/planerent-cirrus-outer-650x.webp"/>
            <h2 className="singelServiceCard-h2">Flugzeug Charter</h2>

          </div>
        </Link>

        <Link href="/flugschule" passHref>
          <div className="singelServiceCard cursor-pointer">
            <img className="singleServiceCardImage " src="/images/planerent-cirrus-innen-650x.webp"/>
            <h2 className="singelServiceCard-h2">Flugschule</h2>

          </div>
        </Link>

        <Link href="/#contact" passHref>
          <div className="singelServiceCard cursor-pointer">
            <img className="singleServiceCardImage" src="/images/planerent-flight-cologne-650x.webp"/>
            <h2 className="singelServiceCard-h2">Kontakt</h2>

          </div>
        </Link>
      </div>
      </section>
  )
}