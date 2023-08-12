import PropTypes from "prop-types";
import { styled } from "styled-components";

Table.propTypes = {
  children: PropTypes.node,
  headerItems:PropTypes.array
};

const TableStyle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);

  position: relative;
  overflow: auto;

  /* width*/
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #d1d1d19a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #616264;
    border-radius: 10px;
  }
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2rem  repeat(5, minmax(110px, 1fr));
  /* grid-auto-flow: column; */
  column-gap: 1.4rem;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;
const TableHeaderWrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--color-grey-50);
  @media (max-width:950px) {
    width: 690px;
  };
  z-index: 100;
`;

function Table({headerItems=[],children}) {
  return (
    <>
      <TableStyle role="table">
        <TableHeaderWrapper>
          <TableHeader role="row">
            {headerItems.map((item, i) => <div key={i}>{item}</div>)}
          </TableHeader>
        </TableHeaderWrapper>

        {children}
        
      </TableStyle>
    </>
  );
}

export default Table;
