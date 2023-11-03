import Places from './Places.jsx';
import Error from './Error.jsx';
import FetchAvailablePlaces from './Http.jsx';
import useFetch from '../hooks/useFetch.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const { data: places, error } = useFetch(FetchAvailablePlaces, []);

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
