import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import FetchAvailablePlaces from './Http.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const availablePlaces = await FetchAvailablePlaces();
        setPlaces(availablePlaces);
      } catch (error) {
        setError({ message: error.message || 'some error occoured' });
      }
    }
    fetchPlaces();
  }, []);

  if (error)
    return <Error title="An error occoured!" message={error.message} />;

  return (
    <Places
      title="Available Places"
      isLoading={places.length < 1 ? true : false}
      loadingText="Fetching place data..."
      places={places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
