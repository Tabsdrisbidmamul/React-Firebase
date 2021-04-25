import React from 'react';
import EventListItem from './EventListItem';
import PropTypes from 'prop-types';

export default function EventList({
  events,
  selectedEventHandler,
  deleteEventHandler,
}) {
  return (
    <>
      {events.map((event) => {
        return (
          <EventListItem
            event={event}
            key={event.id}
            selectedEventHandler={selectedEventHandler}
            deleteEventHandler={deleteEventHandler}
          />
        );
      })}
    </>
  );
}

EventList.propTypes = {
  events: PropTypes.array,
  selectedEventHandler: PropTypes.func,
  deleteEventHandler: PropTypes.func,
};
