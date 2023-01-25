const express = require('express');

const PORT = process.env.PORT || 3001;

const axios = require('axios');

const app = express();

require('dotenv').config();

// TODO: remove this
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/yelp', (req, res) => {
  const term = req.query.term;
  const categories = req.query.categories;
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
        location,
        limit
      }
    })
    .then(response => {
      res.json(response.data.businesses[0]);
      // id, name, image_url, url, categories[], rating, price, display_address 
      // res.json([response.data.businesses[0].name, response.data.businesses[0].id]);
    })
    .catch(error => {
      res.json(error);
    });
});

app.get('/api/yelp/:id', (req, res) => {
  const id = req.params['id']

  axios
    .get(`https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      }
    })
    .then(response => {
      res.json(response.data)
      // id, name, image_url, url, phone or display_phone, review_count, categories[], 
      // rating, display_address, photos[]
    })
    .catch(error => {
      res.json(error)
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
