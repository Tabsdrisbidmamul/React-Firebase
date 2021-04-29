import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../../app/common/modals/ModalWrapper';

export default function TestModal({ data }) {
  return (
    <ModalWrapper size="mini" header="Test Modal">
      <div>The data is: {data}</div>
    </ModalWrapper>
  );
}

TestModal.propTypes = {
  data: PropTypes.any,
};
