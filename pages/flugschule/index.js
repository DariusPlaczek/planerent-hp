import { useState } from 'react';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MainHeader from "../../components/MainHeader/MainHeader";
import SingleCard from "../../components/Flightschool/SingleCard/SIngleCard";
import Title from "../../components/Flightschool/Title";
import SmallNavigation from "../../components/Flightschool/SmallNavigation";
import Declaration from "../../components/Flightschool/Declaration";
import Training from "../../components/Flightschool/Training";
import FSContact from "../../components/Flightschool/FSContact";
import Declarations from "../../components/Flightschool/Declarations";
import List from "../../components/Flightschool/List";

// export const getStaticProps = async () => {
//
//   const res = await fetch('https://newSite.planerent.de/api/flightschoolUrl.json');
//   const data = await res.json();
//
//   return {
//     props: { data: data }
//   }
// }

const Flugschule = () => {

  const [isLinkActive] = useState({flightschool: true});
  const [toggleState, setToggleState] = useState(0)

  const toogleTab = (value) => {
    setToggleState(value)
  }

  return (
      <MainHeader active={isLinkActive}>
        <div className="w-full h-full lg:pl-56 mt-24 lg:mt-0">

          <div className="flex flex-col flex-wrap w-full h-full justify-center items-center">
            <h3 className="text-white text-base p-4">Willkommen bei der Flugschule von Planerent, hier finden Sie alle nötigen relevanten Informationen und Dokument für die Flugschule.</h3>
            {/*<div className="2xl:w-3/4 grid xl:grid-cols-2 2xl:grid-cols-3 4k:grid-cols-4 gap-0 grid-flow-row ">*/}
            {/*  /!*{data.map((value, key) => (*!/*/}
            {/*  /!*  <Link href={"/flugschule/" + value.url} key={key}>*!/*/}
            {/*  /!*    <SingleCard title={value.title} subtitle={value.subtitle} image={value.image} buttonTitle={value.buttonTitle} description={value.description} link={value.url}/>*!/*/}
            {/*  /!*  </Link>*!/*/}
            {/*  /!*))}*!/*/}

            {/*</div>*/}
            <div className='flex flex-col relative lg:w-10/12 w-full break-words '>

              <div className="flex flex-row px-4 lg:px-0">
                <div className={toggleState === 0 ? "tab active-tabs rounded-tl-2xl" : "tab rounded-tl-2xl" } onClick={() => toogleTab(0)}>LAPL</div>
                <div className={toggleState === 1 ? "tab active-tabs" : "tab" } onClick={() => toogleTab(1)}>PPL(A) </div>
                <div className={toggleState === 2 ? "tab active-tabs" : "tab" } onClick={() => toogleTab(2)}>NFQ</div>
                <div className={toggleState === 3 ? "tab active-tabs rounded-tr-2xl" : "tab rounded-tr-2xl" } onClick={() => toogleTab(3)}>Sprechfunk</div>
              </div>

              <div className="flex-grow">
                <div className={toggleState === 0 ? "content-tab active-content" : "content-tab hidden" }>
                  <section className="tab-text">
                    <Title title={dataState.leichtpiloten.title} />

                    <section className="flex flex-col">
                      <Declarations declarationState={dataState.leichtpiloten.declaration} />
                      <Training training={dataState.leichtpiloten.training} />
                    </section>
                  </section>
                </div>

                <div className={toggleState === 1 ? "content-tab active-content" : "content-tab hidden" }>
                  <section className="tab-text">
                    <Title title={dataState.privatpiloten.title} />

                    <section className="flex flex-col">
                      <Declarations declarationState={dataState.privatpiloten.declaration} />
                      <Training training={dataState.privatpiloten.training} />
                    </section>
                  </section>
                </div>

                <div className={toggleState === 2 ? "content-tab active-content" : "content-tab hidden" }>
                  <section className="tab-text">
                    <Title title={dataState.nachtflug.title} />

                    <section className="flex flex-col">
                      <Declarations declarationState={dataState.nachtflug.declaration} />
                      <Training training={dataState.nachtflug.training} />
                    </section>
                  </section>
                </div>
              </div>

              <div className={toggleState === 3 ? "content-tab active-content" : "content-tab hidden" }>
                <section className="tab-text">
                  <Title title={dataState.sprechfunk.title} />

                  <div className="w-full flex flex-col xl:flex-row">
                    <section className="flightschool-half-separator xl:mr-3 ">
                      <h3 className="flightschool-text pb-2">{dataState.sprechfunk.firstParagraph.text}</h3>
                      <List listData={dataState.sprechfunk.firstParagraph.list} />
                    </section>

                    <section className="flightschool-half-separator xl:ml-3">
                      <h3 className="flightschool-text pb-2">{dataState.sprechfunk.secondParagraph.text}</h3>
                      <List listData={dataState.sprechfunk.secondParagraph.list} />
                    </section>
                  </div>
              <h3 className="uppercase 2k:text-4xl sm:text-2xl text-xl text-pr-secondery 2k:py-6 py-3 pl-6 bg-pr-sidebar my-5 rounded-3xl">Voraussetzungen:</h3>
              <Declaration declaration={dataState.sprechfunk.conditions} />
                </section>
              </div>

            </div>
          </div>

        </div>

        <div className="pt-16">
          <FSContact />
        </div>

      </MainHeader>
  );
}

export default Flugschule;


const dataState = {
  "leichtpiloten": {
    "title": "LAPL(A) Leichtpiloten-Ausbildung",
    "declaration": [
      "Die <b>Leichtluftfahrzeug-Pilotenlizenz (LAPL(A),</b> Flight aircraft pilot licence) ist eine Pilotenlizenz, die zum nichtgewerblichen Fliegen von Leichtflugzeugen berechtigt. Der LAPL ermöglicht gegenüber der höherwertigen Privatpilotenlizenz (PPL) einen einfacheren Erwerb und hat geringere Anforderungen an das medizinische Tauglichkeitszeugnis.",
      "Entgegen der Privatpilotenlizenz ist der LAPL nicht Konform mit den Vorgaben der Internationale Zivilluftfahrtorganisation (ICAO), deshalb wird ein LAPL außerhalb der EASA Mitgliedstaaten nicht anerkannt und kann daher außerhalb der EASA Mitgliedsstaaten nicht genutzt werden.",
      "Mit einem LAPL sind Sie berechtigt, als verantwortlicher Luftfahrzeugführer einmotorige Flugzeuge mit Kolbentriebwerk mit einer maximalen Startmasse von 2.000kg und 3 Passagieren zu führen. Der LAPL ist „zunächst“ auf den Sichtflug bei Tageslicht beschränkt und kann im Gegensatz zum PPL(A) nicht direkt auf den Instrumentenflug erweitert werden."
    ],
    "training": {
      "theory": {
        "firstText": "Die <b>theoretische Ausbildung</b> umfasst 100 Stunden in den Fächern",
        "list": [
          "Luftrecht",
          "Meteorologie",
          "Allgemeine Luftfahrzeugkenntnisse",
          "Flugleistung und Flugplanung",
          "Betriebliche Verfahren",
          "Navigation",
          "Aerodynamik",
          "Menschliches Leistungsvermögen"
        ],
        "secondText": "Und wird mit der Theorieprüfung bei der zuständigen Landesluftfahrtbehörde abgeschlossen."
      },
      "practical": {
        "firstText": "Die <b>praktische Ausbildung</b> besteht aus mindestens 30 Flugstunden, davon mindestens:",
        "list": [
          "15 Stunden Ausbildung mit Fluglehrer",
          "6 Stunden Alleinflug mit Flugauftrag, dabei mindestens fünf Stunden Überlandflug"
        ],
        "secondText": "Im unmittelbaren Anschluss an die Ausbildung erfolgt die praktische Prüfung."
      },
      "conditions": {
        "list": [
          "Mindestalter für den Lizenzerwerb 17 Jahre (bei Ausbildungsbeginn 16 Jahre)",
          "Fliegerärztliches Tauglichkeitszeugnis für LAPL",
          "Zuverlässigkeitsüberprüfung(ZÜP)",
          "Auszug aus dem Verkehrszentralregister (KBA)",
          "Führungszeugnis der Klasse „0“ zur Vorlage bei der Landesluftfahrtbehörde",
          "Nachweis über einen „Erste Hilfe“ Kurs"
        ],
        "text": ""
      }
    }
  },
  "privatpiloten": {
    "title": "PPL(A) Privatpiloten-Ausbildung",
    "declaration": [
     "Die Lizenz für <b>Privatpiloten (PPL</b>, private pilot license) ist eine nach den Richtlinien der Internationale Zivilluftfahrtorganisation (ICAO) festgelegte Erlaubnis zum Führen von Luftfahrzeugen. Sie erlaubt das weltweite nichtgewerbliche Führen von Luftfahrzeugen verschiedener Kategorien und Klassen auf Luftfahrzeugen des Staates der ausstellenden Behörde.",
     "Die PPL(A) Lizenz legt den Grundstein für alle Möglichkeiten Ihrer fliegerischen Karriere. Ganz egal, ob Sie privat oder geschäftlich fliegen möchten, mit dem PPL beginnt alles.",
     "Mit dieser Lizenz und der dazugehörigen Klassenberechtigung(SEP) sind Sie berechtigt Flugzeuge mit einer Startmasse von 5,7 Tonnen zu fliegen. Ausserdem kann diese Lizenz um weitere Berichtigungen wie zb. Nachtflug, Kunstflug, Lehrberechtigung oder Instrumentenflug erweitert werden."
    ],
    "training": {
      "theory": {
        "firstText": "Die <b>theoretische Ausbildung</b> umfasst 100 Stunden in den Fächern",
        "list": [
          "Luftrecht",
          "Meteorologie",
          "Allgemeine Luftfahrzeugkenntnisse",
          "Flugleistung und Flugplanung",
          "Betriebliche Verfahren",
          "Navigation",
          "Aerodynamik",
          "Menschliches Leistungsvermögen"
        ],
        "secondText": "Und wird mit der Theorieprüfung bei der zuständigen Landesluftfahrtbehörde abgeschlossen."
      },
      "practical": {
        "firstText": "Die <b>praktische Ausbildung</b> besteht aus mindestens 45 Flugstunden, davon mindestens:",
        "list": [
          "25 Stunden Ausbildung mit Fluglehrer",
          "10 Stunden Alleinflug mit Flugauftrag, dabei mindestens fünf Stunden Überlandflug"
        ],
        "secondText": "Im unmittelbaren Anschluss an die Ausbildung erfolgt die praktische Prüfung."
      },
      "conditions": {
        "list": [
          "Mindestalter für den Lizenzerwerb 17 Jahre (bei Ausbildungsbeginn 16 Jahre)",
          "Fliegerärztliches Tauglichkeitszeugnis der Klasse 2",
          "Zuverlässigkeitsüberprüfung(ZÜP)",
          "Auszug aus dem Verkehrszentralregister (KBA)",
          "Führungszeugnis der Klasse „0“ zur Vorlage bei der Landesluftfahrtbehörde",
          "Nachweis über einen „Erste Hilfe“ Kurs"
        ],
        "text": ""
      }
    }
  },
  "nachtflug": {
    "title": "Nachtflug (NFQ)",
    "declaration": [
      "Die <b>Nachtflugqualifikation (NFQ,</b> , Night Flying Qualification) berechtigt Luftfahrzeugführer mit einer Pilotenlizenz, die keine Instrumentenflugberechtigung (IR) besitzen, zur Durchführung von Flügen nach Sichtflugregeln bei Nacht. Die Nachtflugausbildung ist eine zusätzliche Berechtigung zu Ihrer bestehenden Lizenz und wird in diese eingetragen.",
      "Als Nacht gilt die Zeit zwischen dem „bürgerlichem Sonnenuntergang“ (SS+40 Min.) und „bürgerlichem Sonnenaufgang“ (SR-40 Min.)"
    ],
    "training": {
      "theory": {
        "firstText": "Die <b>theoretische Ausbildung</b> umfasst 5 Stunden und wird vor Beginn der praktischen Ausbildung gemäß FCL.810 in den folgenden Fächern durchgeführt.",
        "list": [
          "Luftrecht",
          "Meteorologie",
          "Menschliches Leistungsvermögen",
          "Navigation und Flugplanung",
          "Notverfahren bei Nacht"
        ],
        "secondText": "Eine theoretische Prüfung ist nicht erforderlich."
      },
      "practical": {
        "firstText": "Die <b>praktische Ausbildung</b> umfasst mindestens 5 Stunden Flugausbildung bei Nacht.",
        "list": [
          "davon mindestens 3 Stunden Ausbildung mit Fluglehrer",
          "davon mindestens 1 Stunde Überland-Navigation mit einem Überlandflug von mindestens 50km (27NM)",
          "Mindestens 5 Starts und Landungen bis zum vollständigen Stillstand im überwachten Alleinflug"
        ],
        "secondText": "In der Nachtflugausbildung ist keine Befähigungsüberprüfung durch einen Prüfer (Flight Examiner, FE) vorgesehen, jedoch hat die DTO den zufriedenstellenden Abschluss der Ausbildung zu bestätigen."
      },
      "conditions": {
        "list": [
          "PPL(A) oder LAPL(A)*",
          "Gültige Klassenberechtigung (SEP)",
          "Fliegerärztliches Tauglichkeitszeugnis der Klasse 2",
          "Zuverlässigkeitsüberprüfung(ZÜP)"
        ],
        "text": "*Sofern ein LAPL(A) Lizenzinhaber die Nachtflugausbildung anstrebt ist vor Beginn der eigentlichen NFQ Ausbildung aus dem PPL(A) Ausbildungsprogramm (Grundlagen des Instrumentenfluges) nachzuholen."
      }
    }
  },
  "sprechfunk": {
    "title": "Sprechfunk",
    "declaration": [
      "Im Washingtoner Radiotelephonievertrag von 1927 wurde vereinbart, dass Funkstationen nur von Personen bedient werden dürfen, die über eine entsprechende Lizenz verfügen. Diese Bestimmung ist noch heute gültig. Insbesondere gilt diese Bestimmung für den Betrieb von  Bordfunkstationen in Flugzeugen. In den meisten Staaten muss ein Pilot deshalb eine spezielle Funkprüfung bestehen, bevor er funken darf.",
      "Diese Anforderung wird im Abkommen über die internationale Zivilluftfahrt von Chicago wiederholt.",
      "Man kann die Funkprüfung auch ablegen, ohne über eine Pilotenlizenz zu verfügen. Nach bestandener Prüfung, kann somit die Aufgabe des Sprechfunks an Board eines Luftfahrzeugs übernommen werden."
    ],
    "firstParagraph": {
      "text": "Wir bieten folgende unterschiedliche Sprechfunkzeugnisse im Rahmen der Ausbildung oder als separaten Kurs für den Flugfunkdienst an:",
      "list": [
        "Beschränkt Gültiges Sprechfunkzeugnis II für den Flugfunkdienst (BZF II)",
        "Beschränkt Gültiges Sprechfunkzeugnis I für den Flugfunkdienst (BZF I)",
        "Allgemeines Sprechfunkzeugnis für den Flugfunkdienst (AZF)"
      ]
    },
    "secondParagraph": {
      "text": "Die erforderliche Art der aufgeführten Zeugnisse richtet sich nach der Art der zu bedienenden Boden- oder Luftfunkstelle. Nach der Verordnung über Flugfunkzeugnisse berechtigen die Flugfunkzeugnisse zur Ausübung des Sprechfunks wie folgt:",
      "list": [
        "BZF II - Sprechfunk innerhalb der Bundesrepublik Deutschland in deutscher Sprache nach Sichtflugregeln",
        "BZF I - Sprechfunk in deutscher und englischer Sprache nach Sichtflugregeln",
        "AZF - Sprechfunk in deutscher und englischer Sprache nach Sicht- und Instrumentenflugregeln"
      ]
    },
    "conditions": [
      "Bewerberinnen und Bewerber müssen mindestens 15 Jahre alt sein oder spätestens drei Monate nach der Prüfung das Mindestalter erreichen",
      "Das BZF I kann als Vollprüfung oder als Zusatzprüfung vom BZF II erworben werden.",
      "Voraussetzungen für den Erwerb eines AZF",
      "Bewerberinnen und Bewerber müssen mindestens 18 Jahre alt sein oder spätestens drei Monate nach der Prüfung das Mindestalter erreichen",
      "Das AZF kann nur mit einer Zusatzprüfung erworben werden, d. h., dass für das AZF das Innehaben des BZF II oder BZF I erforderlich ist"
    ]
  }
}