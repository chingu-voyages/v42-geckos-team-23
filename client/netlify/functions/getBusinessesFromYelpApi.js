import fetch from 'node-fetch' 

// export const getBusinessesFromYelpApi = async (event, context) => {
//     console.log('business ran')

//     console.log({ event })
//     const eventBody = JSON.parse(event.body)

//     const zipCode = eventBody.zipCode
//     const category = eventBody.category

//     const url = `https://api.yelp.com/v3/businesses/search?location=${zipCode}&term=${category}&radius=2000&sort_by=best_match&limit=5`

//     const API_KEY = process.env.YELP_API_KEY
//     console.log(API_KEY)

//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: `Bearer ${API_KEY}`
//         }
//     };

//     const response = await fetch(url, options)

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//     }

//     const data = await response.json()

//     console.log(data)       


//     return {
//         statusCode: 200, 
//         body: JSON.stringify( data.businesses[0] ) //function response must be a string per netlify
//     }
// }

export const handler = async (event, context) => {
    try {
        const API_KEY = process.env.YELP_API_KEY
        const eventBody = JSON.parse(event.body)
        const { location, category } = eventBody
        const term = 'dog+friendly'
        const limit = 36

        const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&categories=${category}&limit=${limit}`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        })

        const data = await response.json()

        return {
            statusCode: 200,
            body: JSON.stringify(data.businesses),
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        }
    }
}