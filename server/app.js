const express = require('express');

const PORT = process.env.PORT || 3001;

const axios = require('axios');

const app = express();

// const { URLSearchParams } = require('url');

require('dotenv').config();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/yelp', (req, res) => {
  // var params = new URLSearchParams('user=abc&q=xyz');
  // console.log(params.get('user'));
  // console.log(params.get('q'));
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
      // res.json(response.data);
      res.json({ name: response.data.businesses[0].name });
    })
    .catch(error => {
      res.json(error);
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
