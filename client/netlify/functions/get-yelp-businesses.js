import fetch from 'node-fetch'

export const handler = async (event, context) => {
    const apiKey = process.env.YELP_API_KEY
    const eventBody = JSON.parse(event.body)
    const { location, category } = eventBody

    try {
        const url = `https://api.yelp.com/v3/businesses/search?term=dog+friendly&location=${location}&categories=${category}&limit=50`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
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
