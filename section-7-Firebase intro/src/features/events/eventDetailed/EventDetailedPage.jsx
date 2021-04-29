import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { listenToEventsFromFirestore } from '../../../app/firestore/firestoreService';
import useFireStoreDoc from '../../../app/hooks/useFirestoreDoc';

import { listenToEvents } from '../eventsActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Redirect } from 'react-router';

export default function EventDetailedPage({ match }) {
  const dispatch = useDispatch();
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const { loading, error } = useSelector((state) => state.async);

  useFireStoreDoc({
    query: () => listenToEventsFromFirestore({ eventId: match.params.id }),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!event && !error)) {
    return <LoadingComponent content="Loading events..." />;
  }

  if (error) return <Redirect to="/error" />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event?.attendees} />
      </Grid.Column>
    </Grid>
  );
}

EventDetailedPage.propTypes = {
  match: PropTypes.object,
};
