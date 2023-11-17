import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../EventForm';

export default function EditEventPage() {
  const event = useRouteLoaderData('event-detail');
  return <EventForm event={event} method={'PATCH'} />;
}
