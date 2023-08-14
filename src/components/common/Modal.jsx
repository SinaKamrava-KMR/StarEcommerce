import { styled } from "styled-components";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

Modal.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;

`;
const BackDropOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: #0f0e0e6e;
`;

function Modal({ children }) {
  return createPortal(
    <Wrapper>
      <BackDropOverlay />
      {children}
    </Wrapper>,
    document.body
  );
}

export default Modal;
