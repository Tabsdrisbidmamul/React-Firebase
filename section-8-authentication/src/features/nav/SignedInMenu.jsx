import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Image, Dropdown} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {signOutFirebase} from '../../app/firestore/firebbaseService';

export default function SignedInMenu() {
    const {currentUser} = useSelector((state) => state.auth);
    const history = useHistory();

    async function handleSignOut() {
        try {
            await signOutFirebase();
            history.push('/');
        } catch (e) {
            toast.error(e.message);
        }
    }

    return (
        <Menu.Item position="right">
            <Image
                avatar
                spaced="right"
                src={currentUser.photoURL || '/assets/user.png'}
            />
            <Dropdown pointing="top left" text={currentUser.email}>
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        to="/create-event"
                        text="Create Event"
                        icon="plus"
                    />

                    <Dropdown.Item text="My Profile" icon="user"/>

                    <Dropdown.Item
                        text="Sign Out"
                        icon="power"
                        onClick={handleSignOut}
                    />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}

SignedInMenu.propTypes = {
    signOutHandler: PropTypes.func,
};
