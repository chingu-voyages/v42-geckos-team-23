const getBusinessesFromYelpApi = (location, category) => {
    return fetch(
        `/api/yelp?location=${location}&term=dog+friendly&categories=${category}`
    ).then((res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(res)
    })
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
