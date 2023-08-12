import styled from "styled-components";
import PropTypes from "prop-types";

Stat.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
};

const StyledStat = styled.div`
  /* Box */
  flex: 1;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ContentWraper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

const Icon = styled.div`
  padding: 1rem;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  align-self: flex-start;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <ContentWraper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </ContentWraper>
    </StyledStat>
  );
}

export default Stat;
