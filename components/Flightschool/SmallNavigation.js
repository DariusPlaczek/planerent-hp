import {useEffect, useState} from "react";
import Link from "next/link";

export default function SmallNavigation({ allUrlData, nowUrl }) {

  const [fsNav, setFsNav] = useState([]);

  useEffect(() => {
    const remove = allUrlData.filter(value => value.url !== nowUrl)
    setFsNav(remove);

  }, [allUrlData]);

  return (
    <ul className="xl:w-1/2 w-full flex sm:flex-row flex-col xl:mb-0 mb-4 order-1 xl:order-2 flex-wrap text-center">
      {fsNav.map((value, key) => (
        <Link href={"/flugschule/" + value.url} key={key}>
          <li key={`${key}-navData-${value.url}`} className="4k:px-10 px-6 pt-2.5 2k:h-12 h-10 w-full sm:w-auto b-transparent 4k:text-xl 2k:text-lg sm:text-xs text-xxs sm:m-2 mb-2 rounded-3xl cursor-pointer"><a>{value.url} <em className="text-pr-secondery">{value.title}</em></a></li>
        </Link>
      ))}
    </ul>
  )
}