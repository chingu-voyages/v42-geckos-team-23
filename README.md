# GoPup

## Overview

This app allows users to find dog-friendly businesses and activities. It makes use of Yelp's [Fusion API](https://fusion.yelp.com/) and [Mapbox](https://www.mapbox.com/) to gather information on such businesses and activities.

Live: We deployed two versions of GoPup. One with a server, and one without.
- Serverless: [GoPup](https://gopup.netlify.app/) (netlify) 
- w/ Server: [Gopup](https://gopup.onrender.com/) (render)

Github Repo: [Repo](https://github.com/chingu-voyages/v42-geckos-team-23)

![home page](/client/src/assets/home.jpg)



## Features

- [x] Modal with geolocation and category shows up on load <br>
- [x] User can input zipcode and choice of activity category <br>
- [x] Spinner is displayed while data is retrieved from Yelp's Fusion API <br>
- [x] App bypasses Yelp's CORS policy via use of Netlify's serverless functions <br>
- [x] Results page shows cards with business' details
- [x] Pagination implemented on results page
- [x] Business page retrieves location from Mapbox as well as contact information <br>
- [x] App is responsive via Tailwindcss <br>

## Contributors 

- Jiyun [Github](https://github.com/jiyunnoh) [LinkedIn](https://www.linkedin.com/in/jiyun-noh-kim/)
- Ronald [Github](https://github.com/ronaldpaek) 
- Joy [Github](https://github.com/jlu9d2) 
- Aaron [Github](https://github.com/AaronoKwok) [LinkedIn](https://www.linkedin.com/in/aaronkwok1/)

## Project Structure

```
/
 client/
 └──├── public/
    ├── src/
    │   ├── assets/
    │   │   └── icons/
    │   │   └── images/
    │   │   └── ...
    │   ├── components/
    │   ├── contexts/
    │   ├── pages/
    │   ├── hooks/
    │   ├── pages/
    │   │   └── Details.jsx
    │   │   └── Error.jsx
    │   │   └── ...
    │   └── utils/
    └── package.json
```

## Running Locally

This app requires ```node >= 16```.

1. Clone repo.
2. Run `cd client' && 'npm install && npm run dev` in terminal.

## Tech Used

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React icon" height="30" /><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router icon" height="30" /><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind icon" height="30" /><img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite icon" height="30" /><img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Vite icon" height="30" />

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Axios](https://axios-http.com/docs/intro)
- [express](https://expressjs.com/)
- [Daisy UI](https://daisyui.com/)

## Preview

![results](/client/src/assets/results.jpg)

![business](/client/src/assets/business.jpg)