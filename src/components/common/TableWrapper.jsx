import PropTypes from "prop-types";
import { styled } from "styled-components";

TableWrapper.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
padding: 1rem;
  width: 100%;
  height: 380px !important;
  border-radius: .5rem;
  border: 1px solid #dfdfdf;
  overflow: hidden;
  display: flex;
  @media (max-width:900px) {
    height: 340px !important;
  }

`;

function TableWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default TableWrapper;
