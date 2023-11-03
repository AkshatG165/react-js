export default async function FetchMenu() {
  const res = await fetch('http://localhost:3000/meals');
  if (!res.ok) throw new Error('Unable to fetch menu');
  const menu = await res.json();
  return menu;
}
