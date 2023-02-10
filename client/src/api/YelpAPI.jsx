

const getBusinessesFromYelpApi = async (location, category) => {
    const parameters = {
      location,
      category
    };

    const queryString = Object.entries(parameters)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const url = `/.netlify/functions/get-yelp${queryString}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
}

const getDetailsByIdFromYelpApi = async (id) => {
    // return fetch(`/api/yelp/${id}`)
    //     .then((res) => res.json())
}

const getReviewsFromYelpApi = async (id) => {
    // return fetch(`/api/yelp/${id}/reviews`)
    //     .then((res => res.json()))
}

export { getBusinessesFromYelpApi, getDetailsByIdFromYelpApi, getReviewsFromYelpApi }

// `/api/yelp?location=${location}&term=dog+friendly&categories=${category}`
