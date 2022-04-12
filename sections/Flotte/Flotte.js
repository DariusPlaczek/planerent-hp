import Card from "./Card/Card";

export default function Flotte() {
  return (
    <div
      className="flex flex-wrap justify-center h-full xl:h-screen w-full lg:pl-56 bg-pr-color"
      id="flotte"
    >
      <Card
        title="Cirrus SR22 Turbo G3 GTS"
        alt="Cirrus SR22 Turbo G3 GTS"
        image="/images/Corli_Flug_cirrus-sr22-front.jpg"
        cruise="185ktas"
        pas="4"
        price="299 Euro/h netto trocken"
        priceBrutto="(355,81 Euro/h brutto)"
      >
        <ul className="w-full md:w-1/2 px-4 planeCard list-outside text-xs md:text-base ">
          <li>Tornado Alley Turbonormalized IO-550-N, 310 HP Engine</li>
          <li>Cirrus Airframe Parachute System (CAPS)</li>
          <li>Airbag Seatbelts</li>
          <li>Avidyne Entegra Primary Flight Display (PFD)</li>
          <li>Avidyne EX5000C Multi-Function Display (MFD)</li>
          <li>2x Garmin GNS430 GPS/COM/NAV WAAS</li>
          <li>Garmin GMA340 Audio Panel</li>
          <li>Garmin GTX 330 Transponder</li>
          <li>406Mhz ELT</li>
          <li>Yaw Damper</li>
          <li>Autopilot</li>
        </ul>
        <ul className="w-full md:w-1/2 px-4 planeCard list-outside text-xs md:text-base ">
          <li>Stormscope</li>
          <li>Dual Electric System</li>
          <li>DME KN-63 mit KDI-572</li>
          <li>TKS Ice Protection System</li>
          <li>Precise Flight Built-In Oxygen System</li>
          <li>Engine & Fuel Monitoring (E-Max)</li>
          <li>Electronic Approach Plates VFR & IFR (C-Max)</li>
          <li>Enhanced Ground Prox. Warning (E-TAWS)</li>
          <li>SkyWatch Traffic Advisory System (Active Traffic)</li>
          <li>Tinted Windows</li>
          <li>Air Condition A/C</li>
        </ul>
      </Card>

      <Card
        title="Piper PA28-181 Archer II"
        alt="planerent piper pa28"
        image="/images/corli_boesing_02.jpg"
        cruise="120ktas"
        pas="4"
        price="139 Euro/h netto trocken"
        priceBrutto="(165,41 Euro/h brutto)"
      >
        <ul className="w-full md:w-2/3 px-4 planeCard list-outside text-xs md:text-base ">
          <li>Lycoming O-360-A4M, 180 HP Engine</li>
          <li>Refurbished Interior, black Leather, with blue stitched</li>
          <li>Refurbished Exterior, new Piper paint schemes</li>
          <li>Wheel pants</li>
          <li>Garmin GTN650Xi GPS/NAV/COMM/WAAS/MFD</li>
          <li>Garmin GMA345 Digital Audio Panel with Bluetooth</li>
          <li>Garmin GTR225, 8,33 kHz Radio</li>
          <li>Trig Transponder TT31</li>
          <li>406Mhz ELT</li>
          <li>Autopilot</li>
        </ul>
      </Card>
    </div>
  );
}
