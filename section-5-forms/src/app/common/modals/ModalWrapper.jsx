import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { closeModal } from './modalReducer';

export default function ModalWrapper({ children, size, header }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    return () => {
      dispatch(closeModal());
    };
  }, [open]);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={size}
    >
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}

ModalWrapper.propTypes = {
  children: PropTypes.object,
  size: PropTypes.string,
  header: PropTypes.string,
};
