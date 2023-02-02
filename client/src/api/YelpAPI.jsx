const getBusinessesFromYelpApi = (location) => {
    // TODO: implement input validation before api call
    // TODO: add category param, and dog friendly? dogs allowed? events?
    // categories=restaurants,bars 
    return fetch(`/api/yelp?term=dogs+allowed&categories=restaurants,bars&location=${location}`)
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
