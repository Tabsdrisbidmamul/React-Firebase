import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendees from './EventListAttendees';
import PropTypes from 'prop-types';

export default function EventListItem({
  event,
  selectedEventHandler,
  deleteEventHandler,
}) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.event}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendees key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          color="teal"
          floated="right"
          content="View"
          onClick={() => selectedEventHandler(event)}
        />
        <Button
          color="red"
          floated="right"
          content="Delete"
          onClick={() => deleteEventHandler(event.id)}
        />
      </Segment>
    </Segment.Group>
  );
}

EventListItem.propTypes = {
  event: PropTypes.object,
  selectedEventHandler: PropTypes.func,
  deleteEventHandler: PropTypes.func,
};
