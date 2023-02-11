import fetch from 'node-fetch'

export const handler = async (event, context) => {
    try {
        const API_KEY = process.env.YELP_API_KEY
        const eventBody = JSON.parse(event.body)
        const { id } = eventBody

        const url = `https://api.yelp.com/v3/businesses/${id}`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        })

        const data = await response.json()

        data.apiKey = process.env.MAPBOX_API_KEY

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        }
    }
}
