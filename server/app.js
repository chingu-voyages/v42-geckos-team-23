const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config()


app.get('/api/yelp', (req, res) => {
  const term = req.query.term;
  const categories = req.query.categories;
  const open_now = req.query.open_now;
  const sort_by = req.query.sort_by;
  const location = req.query.location;
  const limit = req.query.limit;

  axios
    .get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        term,
        categories,
        open_now,
        sort_by,
        location,
        limit
      }
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.json(error);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
