import fetch from 'node-fetch'
import axios from 'axios'

export const handler = async (event, context) => {
    try {
        const eventBody = JSON.parse(event.body)
        const { lng, lat } = eventBody
        const tileset = 'mapbox.mapbox-streets-v12'
        const zoom = 17

        const url = 'https://api.mapbox.com'

        const mapboxRequest = axios.create({
            baseURL: 'https://api.mapbox.com',
            headers: { Authorization: `Bearer ${process.env.MAPBOX_API_KEY}` },
        })

        const request = await mapboxRequest.get(
            `/v4/${tileset}/${lng}/${lat}/${zoom}.pbf`
        )
        console.log(request)
        const data = await request.json()
        console.log(data)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        }
    } catch (error) {
        console.error(error.message)
        return { statusCode: 500, body: error.message }
    }
}
