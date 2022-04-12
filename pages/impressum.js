import {useState} from "react";
import MainHeader from "../components/MainHeader/MainHeader";

export default function impressum() {

  const [isLinkActive] = useState({impressum: true});

  return (
    <MainHeader active={isLinkActive}>
      <div className="w-full min-h-screen h-full overflow-x-hidden lg:pl-56" >
        <div className="flex flex-col w-full 2xl:w-[960px] h-full px-8 mobil">
          <br />
          <br />
          <h2 className="text-4xl text-white uppercase pb-10">Impressum</h2>
          <h2 className="text-2xl text-white uppercase pb-5">ANGABEN GEMÄSS § 5 TMG</h2>
          <p className="text-sm text-white uppercase font-bold">Firma: </p>
          <p className="text-sm text-white uppercase">Bösing & Corli Aircraft Charter GmbH</p>
          <br />
          <p className="text-sm text-white uppercase">Wupperweg 14 <br /> 51789 Lindlar</p>
          <br />
          <p className="text-sm text-white uppercase"><b className="text-white font-bold not-italic">Tel.:</b> +49 172 515 854 0 | Michael Bösing</p>
          <p className="text-sm text-white uppercase"><b className="text-white font-bold not-italic">Tel.:</b> +49 177 691 023 0 | Diego Corli</p>
          <p className="text-sm text-white uppercase"><b className="text-white font-bold not-italic">E-Mail:</b> info[at]planerent(dot)de</p>
          <br />
          <p className="text-sm text-white uppercase"><b className="text-white font-bold not-italic">USt-IdNr.:</b> DE321720373</p>
          <br />
          <p className="text-sm text-white "><b className="text-white font-bold not-italic uppercase">Geschäftsführer:</b> Michael Bösing und Diego Corli</p>
          <p className="text-sm text-white "><b className="text-white font-bold not-italic uppercase">Handelsregister:</b> HRB 96745 Amtsgericht Köln</p>
          <br />
          <br />
          <h2 className="text-2xl text-white uppercase pb-5">HAFTUNG FÜR INHALTE</h2>
          <p className="text-sm text-white ">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          <br />
          <h2 className="text-2xl text-white uppercase pb-5">HAFTUNG FÜR LINKS</h2>
          <p className="text-sm text-white ">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          <br />
          <h2 className="text-2xl text-white uppercase pb-5">URHEBERRECHT</h2>
          <p className="text-sm text-white ">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

    </MainHeader>
  )
}