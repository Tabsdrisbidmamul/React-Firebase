import React from 'react';
import EventListItem from './EventListItem';
import PropTypes from 'prop-types';

export default function EventList({ events }) {
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
