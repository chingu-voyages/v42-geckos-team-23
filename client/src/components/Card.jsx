import ReactStars from 'react-stars'
import ArrowButton from './ArrowButton'

const Card = ({ name, location, rating, image_url, price }) => {
    const address = location.display_address
    return (
        <div className="card w-80 bg-base-100 shadow-xl sm:w-96">
            <figure className="relative">
                <img src={image_url} alt="dog placeholder" />
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
                    <p className="flex-grow-0">{price}</p>
                    <ReactStars
                        value={rating}
                        edit={false}
                        color2={'#FC0706'}
                    />
                </div>

                <div className="card-actions absolute top-4  right-4 justify-end">
                    <ArrowButton />
                </div>
            </div>
        </div>
    )
}

export default Card
