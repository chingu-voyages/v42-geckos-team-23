import ReactStars from 'react-stars'
import ArrowButton from "./ArrowButton";

const Card = ({name, location, rating}) => {
    const address = location.display_address;
  return (
    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl">
        <figure className="relative">
            <img src="https://place.dog/400/225" alt="dog placeholder" />
        </figure>
        <div className="card-body justify-between flex-row">
            <div className="w-3/5">
                <h2 className="card-title">{name}</h2>
                <address>
                    {address.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </address>
            </div>
            <div className="w-2/5 text-right">
                <p className="">Restaurant</p>
                <ReactStars
                    value={rating}
                    edit={false}
                    color2={'#ffd700'}
                />
            </div>

            <div className="card-actions justify-end absolute top-4 right-4">
                <ArrowButton />
            </div>
        </div>
    </div>
  )
}

export default Card
