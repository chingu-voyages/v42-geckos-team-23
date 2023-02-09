const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;

const axios = require('axios');

const app = express();

require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('../client/dist'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html')));
}

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/dist')));

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
// });

app.get("/", (req, res) => {
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
      res.json(response.data.businesses);
      // id, name, image_url, rating, price, location.display_address
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
      // rating, location.display_address, photos[]
    })
    .catch(error => {
      res.json(error)
    });
});

app.get('/api/yelp/:id/reviews', (req, res) => {
  const id = req.params['id']

  axios
    .get(`https://api.yelp.com/v3/businesses/${id}/reviews`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      }
    })
    .then(response => {
      res.json(response.data.reviews)
      // text, rating, time_created, user.name, user.image_url, 
    })
    .catch(error => {
      res.json(error)
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
