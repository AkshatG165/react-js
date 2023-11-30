import MeetupList from '../components/meetups/MeetupList';

const dummy_meetups = [
  {
    id: 'm1',
    title: 'Colosseum',
    image:
      'https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-1200-80.jpg',
    address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A First Meetup',
    itle: 'Colosseum',
    image:
      'https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-1200-80.jpg',
    address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
    description: 'This is a first meetup!',
  },
  {
    id: 'm3',
    title: 'A First Meetup',
    itle: 'Colosseum',
    image:
      'https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-1200-80.jpg',
    address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
    description: 'This is a first meetup!',
  },
];

export default function HomePage() {
  return <MeetupList meetups={dummy_meetups} />;
}
