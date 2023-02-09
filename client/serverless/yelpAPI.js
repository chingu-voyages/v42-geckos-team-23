const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const { location, category } = event.queryStringParameters;
    const yelpApiUrl = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=${category}`;

    const res = await axios.get(yelpApiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res.data)
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
};



// exports.handler = function (event, context, callback) {
//   const term = event.queryStringParameters.term;
//   const categories = event.queryStringParameters.categories;
//   const location = event.queryStringParameters.location;
//   const limit = event.queryStringParameters.limit;

//   const params = JSON.parse(event.body)

//   axios
//     .get('https://api.yelp.com/v3/businesses/search', {
//       headers: {
//         Authorization: `Bearer ${process.env.YELP_API_KEY}`
//       },
//       params: {
//         term,
//         categories,
//         location,
//         limit
//       }
//     })
//     .then(response => {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(response.data.businesses)
//       });
//     })
//     .catch(error => {
//       callback(null, {
//         statusCode: 500,
//         body: JSON.stringify(error)
//       });
//     });
// };
