export default function PlaneCardImage({image, alt}) {
  return (
    <div className="h-48 md:h-96 w-1/2 scale-105 md:shadow-2xl relative">
    <img className="rounded-3xl h-full w-full absolute object-cover" src={image} alt={alt} />
  </div>
  )
}
