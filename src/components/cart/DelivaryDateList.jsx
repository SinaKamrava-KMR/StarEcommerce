import { styled } from "styled-components";
import { convertToPersianNumber, getThreeDayies } from "../../utils/helper";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;
const Date = styled.div`
  background-color: #ececec;
  &:hover {
    background-color: #dcdcdc
  }
  height: 70px;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  flex: 1;
  & > p {
    font-size: 1.8rem;
  }
  cursor: pointer;
`;

const DelivaryDateList = ({ onDate }) => {
  const threeDayies = getThreeDayies();

  console.log(threeDayies);

  return (
    <Wrapper>
      {threeDayies.map((date, i) => {
        return (
          <Date onClick={() => onDate(date)} key={i}>
            <p> {convertToPersianNumber(date.day)} ام</p>
            <small>
              {`${convertToPersianNumber(date.month)}/${convertToPersianNumber(
                date.day
              )}`}{" "}
            </small>
          </Date>
        );
      })}
    </Wrapper>
  );
};

DelivaryDateList.propTypes = {
  onDate: PropTypes.func,
};
export default DelivaryDateList;
