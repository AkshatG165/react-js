import { useRouteError } from 'react-router-dom';
import MainNavigation from '../MainNavigation';
import PageContent from '../PageContent';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An Error Occoured!';
  let message = 'Something went wrong';

  if (error.status === 500) message = error.data.message;
  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find resource or page';
  }
  console.log(error);
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
