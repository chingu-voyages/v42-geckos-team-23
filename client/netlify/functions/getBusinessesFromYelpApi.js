import fetch from 'node-fetch' 

export const getBusinessesFromYelpApi = async (event, context) => {
    console.log({ event })

    const eventBody = JSON.parse(event.body)
    const zipCode = JSON.parse(eventBody.zipCode)
    const category = JSON.parse(eventBody.category)

    const url = `https://api.yelp.com/v3/businesses/search?location=${zipCode}&term=${category}&radius=2000&sort_by=best_match&limit=5`

    const API_KEY = process.env.YELP_API_KEY
    console.log(API_KEY)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)       


    return {
        statusCode: 200, 
        body: JSON.stringify( data.businesses[0] ) //function response must be a string per netlify
    }
}