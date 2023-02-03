import { useState, useContext } from 'react'
import Pagination from './Pagination'
import Card from './Card'
import { Context } from '../../Context'

const Results = () => {
    const ctx = useContext(Context)

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(10)
    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const numberOfPages = Math.ceil(ctx.resultsList.length / cardsPerPage)

    return (
        <div className="grid place-content-center space-y-4 py-8">
            <h2 className="text-center text-5xl lg:text-left lg:text-7xl">
                {ctx.categoryName}
            </h2>
            <div className="container mx-auto grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {ctx.resultsList
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
