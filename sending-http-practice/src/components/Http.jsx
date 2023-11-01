export default async function FetchAvailablePlaces() {
  const res = await fetch('http://localhost:3000/places');
  if (!res.ok) throw new Error('Fetching places failed');
  const data = await res.json();
  return data.places;
}
