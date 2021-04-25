import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';
import PropTypes from 'prop-types';

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // function handleCreateEvent(event) {
  //   setEvents([...events, event]);
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   setEvents(
  //     events.map((event) =>
  //       event.id === updatedEvent.id ? updatedEvent : event
  //     )
  //   );
  // }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter((event) => event.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEventHandler={handleDeleteEvent} />
      </Grid.Column>

      <Grid.Column width={6}>
        <h2>Events Filters</h2>
      </Grid.Column>
    </Grid>
  );
}

EventDashboard.propTypes = {
  formOpen: PropTypes.bool,
  setFormOpen: PropTypes.func,
  selectedEventHandler: PropTypes.func,
  selectedEvent: PropTypes.object,
};
