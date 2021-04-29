import React from 'react';
import { Image, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function EventListAttendees({ attendee }) {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL}></Image>
    </List.Item>
  );
}

EventListAttendees.propTypes = {
  attendee: PropTypes.object,
};

export default EventListAttendees;
