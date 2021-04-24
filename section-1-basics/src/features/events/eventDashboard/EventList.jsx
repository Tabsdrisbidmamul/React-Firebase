import React from 'react';
import EventListItem from './EventListItem';
import PropTypes from 'prop-types';

function EventList({ events }) {
  return (
    <>
      {events.map((event) => {
        return <EventListItem event={event} key={event.id} />;
      })}
    </>
  );
}

EventList.propTypes = {
  events: PropTypes.array,
};

export default EventList;
