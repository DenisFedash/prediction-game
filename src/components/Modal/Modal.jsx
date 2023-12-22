import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const ModalWindow = ({ opened, onClose, prediction }) => {
  return (
    <>
      <Modal.Root opened={opened} onClose={onClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p>{prediction}</p>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default ModalWindow;
