import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function LoadingComponent({
  inverted = true,
  content = 'loading...',
}) {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content={content} />
    </Dimmer>
  );
}

LoadingComponent.propTypes = {
  inverted: PropTypes.bool,
  content: PropTypes.string,
};
