import { businesses } from "../constants";
import Card from "./Card"

const Restaurants = () => {
  return (
    <div className="grid place-content-center space-y-4">
        <h2 className="text-5xl text-center lg:text-left lg:text-7xl">Restaurants</h2>
        <div className="mx-auto container grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {businesses.map(business => (
                <Card key={Math.random() * 100} {...business} />
            ))}
        </div>
    </div>
  )
}

export default Restaurants