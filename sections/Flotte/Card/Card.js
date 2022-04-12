import PlaneCardImage from "./PlaneCardImage";
import PlaneCardInformation from "./PlaneCardInformation";
import PlaneCardTitle from "./PlaneCardTitle";

function Card(props) {
  const { image, alt, title, cruise, pas, price, priceBrutto } = props;

  return (
    <div className="flex flex-row flex-wrap w-11/12 h-auto rounded-3xl m-8 relative bg-pr-sidebar ">
      <PlaneCardImage image={image} alt={alt} />
      <div className="w-1/2">
        <PlaneCardTitle title={title} />
        <div className="flex flex-row flex-wrap w-full text-white py-2 lg:text-base font-light">
          {props.children}
        </div>
        {/*<PlaneCardInformation*/}
        {/*  cruise={cruise}*/}
        {/*  pas={pas}*/}
        {/*  price={price}*/}
        {/*  priceBrutto={priceBrutto}*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default Card;
