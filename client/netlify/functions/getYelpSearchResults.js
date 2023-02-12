import fetch from 'node-fetch'

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
