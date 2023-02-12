import { useState, useEffect } from 'react';

const useGetCurrentPosition = () => {
  const [location, setLocation] = useState(null);
  const [isLocationLoading, setIsLocationLoading] = useState(true);

  useEffect(() => {
    const getCurrentPosition = async () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error)
        );
      });
    };

    getCurrentPosition()
      .then(position => {
        const { latitude: lat, longitude: lng } = position.coords;
        const data = { lat, lng };
        fetch('/.netlify/functions/getZipCode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(({ zipCode }) => {
            setLocation(zipCode);
            setIsLocationLoading(false);
          });
      })
      .catch(err => {
        console.log(err);
        setIsLocationLoading(false);
      });
  }, []);

  return { location, isLocationLoading };
};

export default useGetCurrentPosition;
