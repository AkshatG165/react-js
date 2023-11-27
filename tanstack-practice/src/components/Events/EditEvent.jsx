import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event-details', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000,
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    //this will be called after we call mutate but before the mutation actually happens
    onMutate: async (data) => {
      await queryClient.cancelQueries(['event-details', params.id]);
      const prevData = queryClient.getQueryData(['event-details', params.id]); //for rolling back if updatation fails
      queryClient.setQueryData(['event-details', params.id], data.eventData);
      return { prevData }; //whatever we return from onMutate, will be available in context object in onError
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(['event-details', params.id], context.prevData);
    },
  });

  const handleSubmit = (formData) => {
    mutate({ id: params.id, eventData: formData });
    navigate('../');
  };
  const handleClose = () => navigate('../');

  return (
    <Modal onClose={handleClose}>
      {isPending && (
        <div className="center">
          <LoadingIndicator />
        </div>
      )}
      {data && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to={`/events/${params.id}`} className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      )}
      {isError && (
        <>
          <ErrorBlock
            title="An error occurred"
            message={error.info?.message || 'Failed to update event'}
          />
          <div className="form-actions">
            <Link to="../">Okay</Link>
          </div>
        </>
      )}
    </Modal>
  );
}
