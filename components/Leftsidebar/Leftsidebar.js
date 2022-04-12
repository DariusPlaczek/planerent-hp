import Li from "../Li/Li";
import MainNav from "../MainNav/MainNav";
import FooterContent from "../Footer/FooterContent";


function Leftsidebar({active}) {

  return (
    <div className="lg:flex hidden flex-col bg-pr-sidebar w-56 h-screen fixed top-0 left-0 z-50 shadow-xl ">
      <a className="absolute top-3 flex justify-center items-center h-height-mobil-nav bg-white rounded-r-3xl absolute w-64 shadow-2xl" href='/'>
        <img
          src="/images/Logo_pr_WEBklein-hp.png"
          alt="Planerent logo"
          style={{width: "200px", height: "42px"}}
        />
      </a>
      <div className="flex items-center h-full w-full pl-10">
        <div className="relative">
          <MainNav active={active}/>
          <div className="border-l w-1 absolute top-1 -left-menu bottom-6"/>
        </div>
      </div>

      <FooterContent />

    </div>
  );
}

export default Leftsidebar;
