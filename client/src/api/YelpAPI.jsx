const getBusinessesFromYelpApi = (location) => {
    // TODO: implement input validation before api call
    // TODO: add category param, and dog friendly? dogs allowed? events?
    return fetch(`/api/yelp?location=${location}&term=dog+friendly`)
        .then((res) => res.json())
}

const getDetailsByIdFromYelpApi = (id) => {
    return fetch(`/api/yelp/${id}`)
        .then((res) => res.json())
}

const getReivewsFromYelpApi = () => {
    // fetch();
}

export { getBusinessesFromYelpApi, getDetailsByIdFromYelpApi, getReivewsFromYelpApi }