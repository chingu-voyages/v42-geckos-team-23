import { useState } from 'react'
import Pagination from './Pagination'

import { businesses } from '../constants'
import Card from './Card'

const createDuplicateData = () => {
    let data = []
    for (let i = 0; i < 5; i++) {
        data = data.concat(businesses)
    }
    return data
}

const Results = () => {
    const [dummyData, setDummyData] = useState(createDuplicateData)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(10)
    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const numberOfPages = Math.ceil(dummyData.length / cardsPerPage)

    return (
        <div className="grid place-content-center space-y-4 py-8">
            <h2 className="text-center text-5xl lg:text-left lg:text-7xl">
                Restaurants
            </h2>
            <div className="container mx-auto grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {dummyData
                    .slice(indexOfFirstCard, indexOfLastCard)
                    .map((business) => (
                        <Card key={Math.random() * 100} {...business} />
                    ))}
            </div>
            <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Results
