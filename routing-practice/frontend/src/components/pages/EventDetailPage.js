import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../EventItem';

export default function EventDetailPage() {
  const event = useRouteLoaderData('event-detail');
  return <EventItem event={event} />;
}

export async function fetchEventItem({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok)
    throw json(
      { message: "Couldn't fetch details for selected event" },
      { status: 500 }
    );

  const resData = await response.json();
  return resData.event;
}

export async function deleteEventItem({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok)
    throw json({ message: "Couldn't delete the event" }, { status: 500 });
  return redirect('/events');
}
