export default async function FetchAvailablePlaces() {
  const res = await fetch('http://localhost:3000/places');
  if (!res.ok) throw new Error('Fetching places failed');
  const data = await res.json();
  return data.places;
}

export async function updateUserPlaces(places) {
  const res = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places: places }),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Updating places failed');
  const data = await res.json();
  return data.message;
}

export async function FetchUserPlaces() {
  const res = await fetch('http://localhost:3000/user-places');
  if (!res.ok) throw new Error('Fetching user-places failed');
  const data = await res.json();
  return data.places;
}
