import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form className="event">
        <Form.Field>
          <input type="text" placeholder="Enter title" />
        </Form.Field>

        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>

        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>

        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>

        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>

        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>

        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="submit"
          floated="right"
          positive
          content="Cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
}

EventForm.propTypes = {
  setFormOpen: PropTypes.func,
};
