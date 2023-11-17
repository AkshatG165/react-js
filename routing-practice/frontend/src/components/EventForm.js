import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  json,
  redirect,
} from 'react-router-dom';
import classes from './EventForm.module.css';

export default function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const cancelHandler = () => navigate('..');
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export async function manipulateEventItem({ request, params }) {
  const fd = await request.formData();
  const formFields = {
    title: fd.get('title'),
    image: fd.get('image'),
    date: fd.get('date'),
    description: fd.get('description'),
  };

  let url = 'http://localhost:8080/events';
  if (request.method === 'PATCH') url += `/${params.eventId}`;

  const res = await fetch(url, {
    method: request.method,
    body: JSON.stringify(formFields),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 422) return res;

  if (!res.ok)
    throw json({ message: 'unable to add new event' }, { status: 500 });
  return redirect('/events');
}
