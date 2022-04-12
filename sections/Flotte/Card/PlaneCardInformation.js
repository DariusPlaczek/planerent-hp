export default function PlaneCardInformation({cruise, pas, price, priceBrutto}) {
  return (
    <div className="flex flex-row flex-wrap justify-around w-full px-2 rounded-b-3xl md:absolute md:bottom-0 pb-4 uppercase">
      <div className="card-information">
        <p className="xl:text-xl text-base">{cruise}</p>
        <span className="font-mono">CRUISE SPEED</span>
      </div>
      <div className="card-information">
        <p className="xl:text-xl text-base">{pas}</p>
        <span className="font-mono">MAX PASSENGERS</span>
      </div>
      <div className="card-information">
        <p className="xl:text-xl text-base">{price}</p>
        <span className="font-mono">{priceBrutto}</span>
      </div>
    </div>
  );
}