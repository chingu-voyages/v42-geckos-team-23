const getBusinessesFromYelpApi = async (location, category) => {
    return fetch(`/api/yelp?location=${location}&term=dog+friendly&categories=${category}`)
        .then((res) => res.json())
}

const getDetailsByIdFromYelpApi = async (id) => {
    return fetch(`/api/yelp/${id}`)
        .then((res) => res.json())
}

const getReviewsFromYelpApi = async (id) => {
    return fetch(`/api/yelp/${id}/reviews`)
        .then((res => res.json()))
}

export { getBusinessesFromYelpApi, getDetailsByIdFromYelpApi, getReviewsFromYelpApi }
