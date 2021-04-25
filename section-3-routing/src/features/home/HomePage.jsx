import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import logo from '../../assets/logo.png';

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image src={logo} size="massive" style={{ marginBottom: 12 }} />
          Re-vents
        </Header>
        <Button size="huge" inverted onClick={() => history.push('/events')}>
          Getting Started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}

HomePage.propTypes = {
  history: PropTypes.object,
};
