import React from "react"
import styled from "styled-components/macro"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: ${props => (props.show ? "block" : "none")};
`

const Modal = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`

const ImageModal = ({ hideModal, onShow, children }) => (
  <ModalWrapper show={onShow} onClick={hideModal}>
    <Modal>{children}</Modal>
  </ModalWrapper>
)

export default ImageModal
