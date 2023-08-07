import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

FilterDropDown.propTypes = {
  onSelectItem: PropTypes.func,
  onMouseLeave: PropTypes.func,
  label: PropTypes.string,
  count: PropTypes.number,
  contents: PropTypes.array,
};

const Container = styled(Box)({
  padding: "2rem .5rem",
  borderRadius: ".6rem",
  boxShadow: "0 0 10px #8d8d8d44",
  overflow: "hidden",
  backgroundColor: "#fff",

});

const Wrapper = styled(Box)({
  minWidth:"180px",
  zIndex:"1000",
  paddingTop: "2rem",
  position: "absolute",
  top: "70%",
  left: "0",
  "@media (max-width:950px)": {
    right: "0",
  },
});
const ItemWrapper = styled(Box)({
 width:"100%",
  display: "flex",
  gap: "4rem",
  padding: "1rem",
  borderRadius: "10px",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: "#e8ecf7b8",
  },
});
const Item = styled("p")({
  color: "#333",
  fontSize: "14px",
  whiteSpace: "nowrap",
});
const Count = styled("span")({
  width: "25px",
  height: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#bed0ff54",
  padding: ".3rem",
  borderRadius: "50%",
  fontSize: "12px",
});

function FilterDropDown({ label, contents, onSelectItem }) {
  return (
    <Wrapper
      component={motion.div}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Container>
        <ItemWrapper onClick={() => onSelectItem("")}>
          <Item>انتخاب کنید</Item>
        </ItemWrapper>

        {contents.map((data) => {
          return (
            <ItemWrapper
              key={data.label}
              onClick={() => onSelectItem(`${label}/${data.label}`)}
            >
              <Item>{data.label}</Item>
              <Count>{data.count}</Count>
            </ItemWrapper>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default FilterDropDown;
