import { Suspense } from 'react';
import EventsList from '../../components/EventsList';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

export default function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok)
    throw json({ message: 'Unable to get events' }, { status: 500 });

  const resData = await response.json();
  return resData.events;
}

export function fetchEvents() {
  return defer({
    events: loadEvents(),
  });
}
