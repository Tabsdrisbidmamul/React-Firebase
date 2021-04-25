import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Image, Dropdown } from 'semantic-ui-react';
import userImage from '../../assets/user.png';
import PropTypes from 'prop-types';

export default function SignedInMenu({ signOutHandler }) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={userImage} />
      <Dropdown pointing="top left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create-event"
            text="Create Event"
            icon="plus"
          />

          <Dropdown.Item text="My Profile" icon="user" />

          <Dropdown.Item
            text="Sign Out"
            icon="power"
            onClick={signOutHandler}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

SignedInMenu.propTypes = {
  signOutHandler: PropTypes.func,
};
