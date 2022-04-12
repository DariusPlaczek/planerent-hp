export default function PlaneCardTitle({title}) {
  return (
    <div className=" px-6 py-2 bg-red-800 w-full font-mono">
      <h3 className="lg:text-2xl text-white uppercase ">
       {title}
      </h3>
    </div>
  );
}