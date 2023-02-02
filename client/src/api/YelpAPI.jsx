const getBusinessesFromYelpApi = (location, category) => {
    // TODO: implement input validation before api call
    return fetch(`/api/yelp?location=${location}&term=dog+friendly&categories=${category}`)
        .then((res) => res.json())
}

const getDetailsByIdFromYelpApi = (id) => {
    return fetch(`/api/yelp/${id}`)
        .then((res) => res.json())
}

const getReviewsFromYelpApi = (id) => {
    return fetch(`/api/yelp/${id}/reviews`)
        .then((res => res.json()))
}

export { getBusinessesFromYelpApi, getDetailsByIdFromYelpApi, getReviewsFromYelpApi }
