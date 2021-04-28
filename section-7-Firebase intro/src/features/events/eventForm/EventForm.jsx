import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Header, Segment, FormField } from 'semantic-ui-react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { createEvent, updateEvent } from '../eventsActions';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryData } from '../../../app/api/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';

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

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required('You must provide a description'),
    city: Yup.string().required('You must provide a city'),
    venue: Yup.string().required('You must provide a venue'),
    date: Yup.string().required('You must provide a date'),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (selectedEvent) {
            dispatch(updateEvent({ ...selectedEvent, ...values }));
          } else {
            dispatch(
              createEvent({
                ...values,
                id: cuid(),
                hostedBy: 'Bob',
                attendees: [],
                hostPhotoURL: '/assets/user.png',
              })
            );
          }
          history.push('/events');
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <FormField>
              <Header sub color="teal" content="Event Details" />
              <MyTextInput
                name="title"
                type="text"
                placeholder="Event Title"
                label="Event Title"
              />
              <MySelectInput
                name="category"
                type="text"
                placeholder="Event category"
                label="Event Category"
                options={categoryData}
              />
              <MyTextArea
                name="description"
                type="text"
                placeholder="Event Description"
                label="Event Description"
                rows="3"
              />
              <Header sub color="teal" content="Event Location Details" />
              <MyTextInput
                name="city"
                type="text"
                placeholder="City"
                label="City"
              />
              <MyTextInput
                name="venue"
                type="text"
                placeholder="Venue"
                label="Venue"
              />
              <MyDateInput
                name="date"
                placeholderText="Event Date"
                label="Event Date"
                timeFormat="HH:mm"
                showTimeSelect
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm a"
              />
            </FormField>

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              floated="right"
              positive
              content="Submit"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              floated="right"
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
