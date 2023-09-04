import PropTypes from "prop-types";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

import { useState } from "react";
import { styled } from "styled-components";
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";

const Wrapper = styled.div`
  position: absolute;
  top: 110%;
 
  left: 50%;
transform:translateX(-50%);

 

`



const StarDatePicker = ({ onDate }) => {
  const [selectedDay, setSelectedDay] = useState(null);



  const handleChangeDay = (date) => {
    onDate(date);
    setSelectedDay(date);
  };

  return (
    <Wrapper>
      <Calendar
        value={selectedDay}
        onChange={handleChangeDay}
        locale="fa"
        minimumDate={utils("fa").getToday()}
        shouldHighlightWeekends
        
      />
    </Wrapper>
  );
};

StarDatePicker.propTypes = {
  onDate: PropTypes.func,
};

export default StarDatePicker;
