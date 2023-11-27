import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';
import { useState } from 'react';

export default function EventDetails() {
  const [deletingEvent, setDeletingEvent] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event-details', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const {
    mutate,
    isPending: isDeleting,
    isError: isErrorDelete,
    error: errorDelete,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });
      navigate('/events');
    },
  });

  const deleteHandler = () => setDeletingEvent(true);
  const onCancel = () => setDeletingEvent(false);
  const onDelete = () => mutate({ id: params.id });

  return (
    <>
      {deletingEvent && (
        <Modal>
          <h2>Are you sure?</h2>
          <p>This action can't be undone.</p>
          <div className="form-actions">
            <button onClick={onCancel} className="button-text">
              Cancel
            </button>
            <button onClick={onDelete} className="button">
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
          {isErrorDelete && (
            <ErrorBlock
              title="An error occurred"
              message={errorDelete.info?.message || 'Failed to delete event'}
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && (
        <div style={{ textAlign: 'center' }}>
          <LoadingIndicator />
        </div>
      )}
      {isError && (
        <ErrorBlock
          title="An error occurred"
          message={error.info?.message || 'Failed to fetch event details'}
        />
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={deleteHandler}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img
              src={`http://localhost:3000/${data.image}`}
              alt="event-image"
            />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
