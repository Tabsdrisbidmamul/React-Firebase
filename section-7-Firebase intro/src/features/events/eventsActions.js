import {CREATE_EVENTS, DELETE_EVENTS, FETCH_EVENTS, UPDATE_EVENTS} from './eventsConstants';
import {asyncActionError, asyncActionFinish, asyncActionStart} from '../../app/async/asyncReducer';
import {fetchSampleData} from '../../app/api/mockApi';

export function loadEvents() {
  return async (dispatch) => {
    dispatch(asyncActionStart());

    try {
      const events = await fetchSampleData();
      dispatch({type: FETCH_EVENTS, payload: events});
      dispatch(asyncActionFinish());
    } catch (e) {
      dispatch(asyncActionError(e));
    }
  };
}

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
