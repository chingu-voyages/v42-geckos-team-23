const getBusinessesFromYelpApi = (location, category) => {
    return fetch(`/api/yelp?location=${location}&term=dog+friendly&categories=${category}`)
        .then((res) => res.json())
        .catch((err) => console.log(err))
}

const getDetailsByIdFromYelpApi = (id) => {
    return fetch(`/api/yelp/${id}`)
        .then((res) => res.json())
        .catch((err) => console.log(err))
}

const getReviewsFromYelpApi = (id) => {
    return fetch(`/api/yelp/${id}/reviews`)
        .then((res => res.json()))
        .catch((err) => console.log(err))
}

export { getBusinessesFromYelpApi, getDetailsByIdFromYelpApi, getReviewsFromYelpApi }
