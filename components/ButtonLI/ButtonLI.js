import Link from 'next/link'

export default function ButtonLI({title, icon, bgColor, txtColor, linkTo}) {
  return (
    <Link href={linkTo}>
      <div className=" px-3 lg:pt-7">
        <div className="mb-2">
          <button className={`flex justify-center items-center flex-row px-4 py-3 rounded-xl text-sm font-medium bg-${bgColor} text-${txtColor} outline-none m-1 hover:m-0 border border-pr-sidebar hover:border-4  transition-all uppercase`}>
              <span className="pr-3">
                  <svg style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d={icon} />
                  </svg>
              </span>
            {title}
          </button>
        </div>
    </div>
   </Link>
  )
}