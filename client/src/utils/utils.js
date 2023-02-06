import { getBusinessesFromYelpApi } from '../api/yelpAPI'

export const range = (start, end, step = 1) => {
    let output = []
    if (typeof end === 'undefined') {
        end = start
        start = 0
    }
    for (let i = start; i < end; i += step) {
        output.push(i)
    }
    return output
}

export const getBusinessesHandler = (e, ctx) => {
    e.preventDefault()
    ctx.setIsLoading(true)

    getBusinessesFromYelpApi(ctx.location, ctx.category)
        .then((data) => {
            ctx.setResultsList([...data])
            ctx.setIsSearchBtnClicked(true)
            ctx.setResultsTitle(ctx.categoryName)
            ctx.setIsLoading(false)
        })
        .catch((err) => {
            // if we catch an error that means zip code was "invalid"
            ctx.setIsLoading(false) // if there is an error, set isLoading to false
            ctx.setResultsList([]) // if there is an error, set resultsList to empty array
            ctx.setResultsTitle('')
        })
}
