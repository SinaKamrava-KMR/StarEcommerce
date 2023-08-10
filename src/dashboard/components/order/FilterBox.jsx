import styled from "@emotion/styled";

import { Box } from "@material-ui/core";

import PropTypes from "prop-types";

FilterBox.propTypes = {

  children: PropTypes.node,
};


const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"1rem"
})
function FilterBox({children}) {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default FilterBox;
