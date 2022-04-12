import Li from "../Li/Li";

export default function MainNav({active}) {

  return (
    <>
      <ul>
        <Li title="Home" linkTo="/#home" active={active.home} />
        <Li title="unsere Flotte" linkTo="/flotte" active={active.flotte}/>
        <Li title="Charter" linkTo="/#charter" active={active.charter}/>
        <Li title="Flugschule" linkTo="/flugschule" active={active.flightschool} />
        <Li title="Über Uns" linkTo="/#aboutUs" active={active.aboutMe}/>
        <Li title="Kontakt" linkTo="/#contact" active={active.contact}/>
        <Li title="Impressum" linkTo="/impressum" active={active.impressum} desktopActive={false}/>
        <Li title="Datenschutz" linkTo="/datenschutz" active={active.datenschutz} desktopActive={false}/>
      </ul>
    </>
  )
}