// fetch("/api")
//   .then((res) => res.json())
//   .then((data) => setData(data.message))

// TODO: Update endpoint url with user input from contextprovider.
const getBusinessesAPI = () => {
    console.log("Hi getBusinessesAPI")
    fetch("/api/yelp?location=98155")
        .then((res) => {
            console.log(res.json())
            res.json()
        })
    // .then((data) => setData(data))
}

const getDetailsByIdAPI = () => {
    fetch();
}

const getReivewsAPI = () => {
    fetch();
}

export { getBusinessesAPI, getDetailsByIdAPI, getReivewsAPI }