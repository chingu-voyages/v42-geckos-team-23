import fetch from 'node-fetch' 
import { c } from 'tar'

export const handler = async (event, context) => {
    console.log('fetch details by id ran')

    const eventBody = JSON.parse(event.body)
    const id = eventBody.id
    
    const url = `https://api.yelp.com/v3/businesses/${id}`
    const API_KEY = process.env.YELP_API_KEY

    const options = {
        method: 'GET', 
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    return {
        statusCode: 200, 
        body: JSON.stringify( data )
    }
}