import ArrowButton from './ArrowButton'
import { Rating } from 'react-simple-star-rating'

const Card = ({ id, name, location, rating, image_url, price }) => {
    const address = location.display_address

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
                <div className="w-3/5">
                    <h2 className="card-title">{name}</h2>
                    <address>
                        {address.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </address>
                </div>
                <div className="flex w-2/5 flex-col items-end">
                    {/* TODO: if price is null, take white space. */}

                    {price && <p className='flex-grow-0'>{price}</p>}

                    <Rating
                        initialValue={rating}
                        readOnly={true}
                        size={16}
                        fillColor={'#FC0706'}
                        allowFraction
                        SVGstyle={{ display: 'inline-block' }}
                    />
                </div>

                <div className="card-actions absolute top-4  right-4 justify-end">
                    <ArrowButton id={id} direction='next' />
                </div>
            </div>
        </div>
    )
}

export default Card
