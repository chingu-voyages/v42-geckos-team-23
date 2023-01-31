
import StarRating from './StarRating'
import Address from './Address'
import ArrowButton from './ArrowButton'

const Card = ({ id, name, location, rating, image_url, price }) => {
    console.log(rating)
    return (
        <div className="card w-80 bg-base-100 shadow-xl sm:w-96">
            <figure className="relative h-72">
                <img
                    className="h-full w-full object-cover"
                    src={image_url}
                    alt={name}
                />
            </figure>
            <div className="card-body flex-row justify-between">
                <div className="w-4/5">
                    <h2 className="card-title">{name}</h2>
                    <Address location={location} row={2} />
                </div>
                <div className="flex w-1/5 flex-col items-end">
                    {/* TODO: if price is null, take white space. */}

                    {price && <p className='flex-grow-0'>{price}</p>}

                    <StarRating rating={rating} />
                </div>

                <div className="card-actions absolute top-4  right-4 justify-end">
                    <ArrowButton id={id} />
                </div>
            </div>
        </div>
    )
}

export default Card
