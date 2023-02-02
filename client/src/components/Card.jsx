import PriceRating from './PriceRating'
import BoneRating from './BoneRating'
import Address from './Address'
import ArrowButton from './ArrowButton'

const Card = ({ id, name, location, rating, image_url, price }) => {
    return (
        <div className="card w-[375px] bg-base-100 shadow-xl">
            <figure className="relative h-72">
                <img
                    className="h-full w-full object-cover"
                    src={image_url}
                    alt={name}
                />
            </figure>
            <div className="card-body flex-row items-baseline justify-between">
                <div className="w-9/12">
                    <h2 className="card-title">{name}</h2>
                    <Address location={location} row={2} />
                </div>
                <div className="flex w-3/12 flex-col items-end space-y-2">
                    <PriceRating rating={price} />
                    <BoneRating rating={rating} />
                </div>

                <div className="card-actions absolute top-4  right-4 justify-end">
                    <ArrowButton id={id} direction="next" />
                </div>
            </div>
        </div>
    )
}

export default Card
