import { useRef, useState, useCallback } from 'react';
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces, FetchUserPlaces } from './components/Http.jsx';
import Error from './components/Error.jsx';
import useFetch from './hooks/useFetch.js';

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const {
    isLoading,
    data: userPlaces,
    setData: setUserPlaces,
    error,
  } = useFetch(FetchUserPlaces, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  const handleStopRemovePlace = () => setModalIsOpen(false);

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) prevPickedPlaces = [];
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([...userPlaces, selectedPlace]);
    } catch (e) {
      updateUserPlaces(userPlaces);
      setErrorUpdatingPlaces({ message: e.message || 'Not able to add' });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setModalIsOpen(false);
      setUserPlaces((prev) =>
        prev.filter((place) => place.id !== selectedPlace.current.id)
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (e) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({ message: e.message || 'Not able to delete' });
      }
    },
    [userPlaces]
  );

  const handleOnClose = () => setErrorUpdatingPlaces(null);

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleOnClose}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occoured!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleOnClose}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
        <p className="fallback-text">Fetching Places...</p>
      </header>
      <main>
        {error ? (
          <Error title="An error occoured!" message={error.message} />
        ) : (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
            isLoading={isLoading}
            loadingText={'Fetching your places...'}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
