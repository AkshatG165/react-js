import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/pages/RootLayout';
import HomePage from './components/pages/HomePage';
import EventsPage, { fetchEvents } from './components/pages/EventsPage';
import EventDetailPage, {
  deleteEventItem,
  fetchEventItem,
} from './components/pages/EventDetailPage';
import NewEventPage from './components/pages/NewEventPage';
import EditEventPage from './components/pages/EditEventPage';
import EventsNavigation from './components/EventsNavigation';
import ErrorPage from './components/pages/ErrorPage';
import { manipulateEventItem } from './components/EventForm';
import NewsletterPage, {
  action as newsletterAction,
} from './components/pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsNavigation />,
        children: [
          { index: true, element: <EventsPage />, loader: fetchEvents },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventItem,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: fetchEventItem,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventItem,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventItem,
              },
            ],
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
