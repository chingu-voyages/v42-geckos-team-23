import fetch from 'node-fetch'

export const handler = async (event, context) => {
    const requestBody = JSON.parse(event.body)
    const { lat, lng } = requestBody
    const API_KEY = process.env.GOOGLE_API_KEY

    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    )
    const data = await response.json()
    const result = data.results[0]
    const zipCode = result.address_components.find((component) =>
        component.types.includes('postal_code')
    ).long_name
    return {
        statusCode: 200,
        body: JSON.stringify({ zipCode }),
    }
}
