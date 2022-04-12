import {useState} from "react";
import Link from 'next/link'

import MainHeader from "../components/MainHeader/MainHeader";
import FleetHeader from "../components/Fleet/FleetHeader";
import FleetList from "../components/Fleet/FleetList";
import FleetLinkTo from "../components/Fleet/FleetLinkTo";


export default function flotte() {

  const [isLinkActive] = useState({flotte: true});

  return (
    <MainHeader active={isLinkActive}>
      <div className="w-full min-h-screen h-full overflow-x-hidden lg:pl-56" id="cirrus">
        <div className="w-full min-h-screen h-full flex flex-col items-center ">
          <FleetHeader airplanes={airplanes.firstPlane}/>
          <section className="flex flex-row flex-wrap w-full justify-end text-white md:pt-6 lg:text-base font-light mobil">
            <div className="flex justify-end w-full md:w-1/2">
              <FleetList airportList={airplanes.firstPlane.firstList} />
            </div>
            <div className="flex justify-start w-full md:w-1/2">
              <FleetList airportList={airplanes.firstPlane.secondList} />
            </div>
          </section>

          <div className="w-3/4 border-b-2 md:border-b-4 border-red-800 mt-10" />
        </div>

        <div className="w-full min-h-screen h-full flex flex-col items-center pb-24" id="piper">
          <FleetHeader airplanes={airplanes.secondPlane}/>
          <section className="flex flex-row flex-wrap w-full justify-end text-white pt-20 md:pt-6 lg:text-base font-light">
            <div className="flex justify-end w-full md:w-1/2">
              <FleetList airportList={airplanes.secondPlane.firstList} />
            </div>
            <div className="flex justify-start w-full md:w-1/2">
              <FleetList airportList={airplanes.secondPlane.secondList} />
            </div>
          </section>
          <div className="w-3/4 border-b-2 md:border-b-4 border-red-800 mt-10" />
        </div>
      </div>

      <section className="fixed top-auto bottom-2 w-full h-16 md:h-24 flex flex-row justify-center lg:pl-56 ">

       <span className="airplane-quick-button mr-1 z-20 transition-all" >
          <Link href="/flotte/#cirrus" passHref>
            <FleetLinkTo airplanes={airplanes.firstPlane}/>
          </Link>
        </span>

        <span className="airplane-quick-button ml-1 z-20" >
          <Link href="/flotte/#piper" passHref>
            <FleetLinkTo airplanes={airplanes.secondPlane}/>
          </Link>
        </span>

        <span className="absolute w-full h-full -top-3 py-16 md:py-20 z-0 backdrop-filter backdrop-blur-sm"  />

      </section>

    </MainHeader>
  )
}



const airplanes = {
  firstPlane: {
    id: 'yGFtqDQG',
    name: 'Cirrus SR22 Turbo G3 GTS',
    imageTop: '/images/Corli_Flug_cirrus-sr22-front-650.webp',
    imageBottom: '/images/Corli_Flug_cirrus-sr22-footer-520.webp',
    alt: 'planerent Cirrus SR22 Turbo G3 GTS',
    cruise: '185ktas',
    pas: '4',
    price: '330 Euro/h netto trocken',
    priceBrutto: '(392,72 Euro/h brutto)',
    firstList: [
      'Tornado Alley Turbonormalized IO-550-N, 310 HP Engine',
      'Cirrus Airframe Parachute System (CAPS)',
      'Airbag Seatbelts',
      'Avidyne Entegra Primary Flight Display (PFD)',
      'Avidyne EX5000C Multi-Function Display (MFD)',
      '2x Garmin GNS430 GPS/COM/NAV WAAS',
      'Garmin GMA340 Audio Panel',
      'Garmin GTX 330 Transponder',
      '406Mhz ELT',
      'Yaw Damper',
      'Autopilot'
    ],
    secondList: [
      'Stormscope',
      'Dual Electric System',
      'DME KN-63 mit KDI-572',
      'TKS Ice Protection System',
      'Precise Flight Built-In Oxygen System',
      'Engine & Fuel Monitoring (E-Max)',
      'Electronic Approach Plates VFR & IFR (C-Max)',
      'Enhanced Ground Prox. Warning (E-TAWS)',
      'SkyWatch Traffic Advisory System (Active Traffic)',
      'Tinted Windows',
      'Air Condition A/C'
    ]
  },
  secondPlane: {
    id: 's7J0yQDt',
    name: 'Piper PA28-181 Archer II',
    imageTop: '/images/corli_boesing_02-piper-650.webp',
    imageBottom: '/images/Corli_Flug_cirrus-sr22-footer-520.webp',
    alt: 'planerent piper pa28',
    cruise: '120ktas',
    pas: '4',
    price: '139 Euro/h netto trocken',
    priceBrutto: '(165,41 Euro/h brutto)',
    firstList: [
      'Lycoming O-360-A4M, 180 HP Engine',
      'Refurbished Interior, black Leather, with blue stitched',
      'Refurbished Exterior, new Piper paint schemes',
      'Wheel pants',
      'Garmin GTN650Xi GPS/NAV/COMM/WAAS/MFD',
    ],
    secondList: [
      'Garmin GMA345 Digital Audio Panel with Bluetooth',
      'Garmin GTR225, 8,33 kHz Radio',
      'Trig Transponder TT31',
      '406Mhz ELT',
      'Autopilot'
    ]
  }
}

