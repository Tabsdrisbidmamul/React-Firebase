import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import cuid from 'cuid';
import { Link } from 'react-router-dom';

import { createEvent, updateEvent } from '../eventsActions';
import { Formik } from 'formik';

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    // eslint-disable-next-line no-unused-expressions
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Bob',
            attendees: [],
            hostPhotoURL: '/assets/user.png',
          })
        );
    history.push('/events');
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className="event" onSubmit={handleSubmit}>
            <Form.Field>
              <input
                type="text"
                placeholder="Enter title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <input
                type="text"
                placeholder="Category"
                name="category"
                value={values.category}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <input
                type="text"
                placeholder="Venue"
                name="venue"
                value={values.venue}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <input
                type="date"
                placeholder="Date"
                name="date"
                value={values.date}
                onChange={handleChange}
              />
            </Form.Field>

            <Button type="submit" floated="right" positive content="Submit" />
            <Button
              type="submit"
              floated="right"
              negative
              content="Cancel"
              as={Link}
              to="/events"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}

EventForm.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
