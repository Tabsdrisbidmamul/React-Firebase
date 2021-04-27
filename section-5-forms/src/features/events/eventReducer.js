import { sampleData } from '../../app/api/sampleData';
import { CREATE_EVENTS, DELETE_EVENTS, UPDATE_EVENTS } from './eventsConstants';

const initialState = {
  events: sampleData,
};

export function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENTS: {
      return {
        ...state,
        events: [...state.events, payload],
      };
    }

    case UPDATE_EVENTS: {
      return {
        ...state,
        events: [
          ...state.events.filter((event) => event.id !== payload.id),
          payload,
        ],
      };
    }

    case DELETE_EVENTS: {
      return {
        ...state,
        events: [...state.events.filter((event) => event.id !== payload)],
      };
    }

    default: {
      return state;
    }
  }
}
