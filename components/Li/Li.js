import Link from 'next/link'

export default function Li( {linkTo, title, active, desktopActive = true} ) {

  return (
    <Link href={linkTo} >
      <li className={desktopActive ? "pt-0 pr-2 pb-4 pl-2 uppercase lg:text-pr-primary" : "pt-0 pr-2 pb-4 pl-2 uppercase lg:text-pr-primary lg:hidden block"} >
        <a className="block relative text-base text-left cursor-pointer">
          { title }
        <span className="hidden lg:block absolute w-3 h-3 rounded-full lg:border lg:-left-5 lg:top-1 bg-pr-sidebar z-10 " />
        {active ? <span className="leftsidebar-pivot" /> : ''}
        </a>
      </li>
    </Link>
  )
}