import { useState, useContext, useRef, useEffect } from 'react'

import Pagination from './Pagination'
import Card from './Card'
import { Context } from '../contexts/Context'
import ScrollUpButton from './ScrollUpButton'

const Results = () => {
    const ctx = useContext(Context)
    const resultsRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(9)
    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const numberOfPages = Math.ceil(ctx.resultsList.length / cardsPerPage)

    useEffect(() => {
        if (ctx.resultsList.length > 0) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [ctx.resultsList])

    return (
        <div
            className={
                ctx.resultsList.length > 0
                    ? 'grid place-content-center space-y-4 py-8'
                    : 'invisible'
            }
            ref={resultsRef}
        >
            <h2 className="text-center text-5xl lg:text-left lg:text-7xl">
                {ctx.resultsTitle}
            </h2>
            <div className="container mx-auto grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {ctx.resultsList
                    .slice(indexOfFirstCard, indexOfLastCard)
                    .map((business) => (
                        <Card key={Math.random() * 100} {...business} />
                    ))}
            </div>
            {ctx.resultsList.length > 0 && (
                <div className="relative">
                    <Pagination
                        numberOfPages={numberOfPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    <ScrollUpButton />
                </div>
            )}
        </div>
    )
}

export default Results
