const getBusinessesFromYelpApi = (location) => {
    // TODO: implement input validation before api call
    return fetch(`/api/yelp?location=${location}`)
        .then((res) => res.json())
}

const getDetailsByIdFromYelpApi = () => {
    // fetch();
}

const getReivewsFromYelpApi = () => {
    // fetch();
}

export { getBusinessesFromYelpApi, getDetailsByIdFromYelpApi, getReivewsFromYelpApi }