import fetch from 'node-fetch' 

export const handler = async (event, context) => {

    const eventBody = JSON.parse(event.body)
    const id = eventBody.id
    
    const url = `https://api.yelp.com/v3/businesses/${id}/reviews`
    const API_KEY = process.env.YELP_API_KEY

    const options = {
        method: 'GET', 
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    const response = await fetch(url, options)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return {
        statusCode: 200, 
        body: JSON.stringify( data.reviews )
    }
}