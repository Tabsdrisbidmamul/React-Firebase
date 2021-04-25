import React, { useState } from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen(isOpen) {
    setSelectedEvent(null);
    setFormOpen(isOpen);
  }

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar setFormOpen={handleCreateFormOpen} />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/create-event" component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;

{
  /* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEventHandler={handleSelectedEvent}
          selectedEvent={selectedEvent}
        /> */
}
