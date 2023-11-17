import { Link, useNavigation, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  function startDeleteHandler() {
    const onConfirm = window.confirm('Are you sure?');
    if (onConfirm) {
      //first arguement is data that we wnat ot submit, which will automatically be wrapped in a formData object which we can retrive later
      submit(null, { method: 'DELETE' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler} disabled={isSubmitting}>
          {isSubmitting ? 'Deleting...' : 'Delete'}
        </button>
      </menu>
    </article>
  );
}

export default EventItem;
