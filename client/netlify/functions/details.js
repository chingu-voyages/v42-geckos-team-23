import fetch from 'node-fetch'

export const handler = async (event, context) => {
    try {
        const apiKey = process.env.YELP_API_KEY
        const eventBody = JSON.parse(event.body)
        const { id } = eventBody

        const url = `https://api.yelp.com/v3/businesses/${id}`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })

        const data = await response.json()
        data.mapboxAPIKey = process.env.MAPBOX_API_KEY
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
