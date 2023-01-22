
const Rating = ({ rating }) => {
    const ratingArray = new Array(10).fill(null);
    rating = rating * 2;
  return (
    <div className="rating rating-sm rating-half">
        <input type="radio" name="rating-10" className="rating-hidden" />
        {ratingArray.map((_, index) => {
            console.log(index, rating)
            return index % 2 === 0 ?
            <input key={Math.random() * 100} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked={index === rating - 1} readOnly /> :
            <input key={Math.random() * 100} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" checked={index === rating - 1} readOnly />
        })}
    </div>
  )
}

export default Rating
