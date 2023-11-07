export default async function FetchMenu() {
  const res = await fetch('http://localhost:3000/meals');
  if (!res.ok) throw new Error('Unable to fetch menu');
  const menu = await res.json();
  return menu;
}

export async function PlaceOrder(order) {
  const res = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    body: JSON.stringify({
      order: {
        items: order.items,
        customer: order.customer,
      },
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Unable to place order');
  const menu = await res.json();
  return menu.message;
}
