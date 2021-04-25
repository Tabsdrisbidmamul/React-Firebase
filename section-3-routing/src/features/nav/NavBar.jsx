import React, { useState } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function NavBar({ setFormOpen }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push('/');
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src={logo} alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>

        <Menu.Item as={NavLink} to="/events" name="events" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/create-event">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedInMenu signOutHandler={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}

NavBar.propTypes = {
  setFormOpen: PropTypes.func,
};
