import { CREATE_EVENTS, DELETE_EVENTS, UPDATE_EVENTS } from './eventsConstants';

export function createEvent(event) {
  return {
    type: CREATE_EVENTS,
    payload: event,
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENTS,
    payload: event,
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENTS,
    payload: eventId,
  };
}
