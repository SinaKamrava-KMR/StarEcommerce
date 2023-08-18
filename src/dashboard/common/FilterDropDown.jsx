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

const Container = styled(Box)`
  background-color: #fff;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 180px;
  width: 200px;
  padding: 2rem 0.5rem;
  border-radius: 0.6rem;
  box-shadow: 0 0 10px #8d8d8d44;
  /* width*/
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #e7e7e79a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #dcdcdc;
    border-radius: 10px;
  }
`;
// const Container = styled(Box)({
//   padding: "2rem .5rem",
//   borderRadius: ".6rem",
//   boxShadow: "0 0 10px #8d8d8d44",
//   overflow: "hidden",
//   backgroundColor: "#fff",

// });

const Wrapper = styled(Box)({
  minWidth: "180px",
  zIndex: "1000",
  paddingTop: "2rem",
  position: "absolute",
  top: "70%",
  left: "0",
  "@media (max-width:950px)": {
    right: "0",
  },
});
const ItemWrapper = styled(Box)({
  width: "100%",
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

function FilterDropDown({ contents, onSelectItem }) {
  return (
    <Wrapper
      component={motion.div}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Container>
        <ItemWrapper onClick={() => onSelectItem({ value: "" })}>
          <Item>انتخاب کنید</Item>
        </ItemWrapper>

        {contents.map((data) => {
          return (
            <ItemWrapper key={data.label} onClick={() => onSelectItem(data)}>
              <Item>{data.label}</Item>
              {data?.count !== undefined && data.count !== 0 && (
                <Count>{data.count}</Count>
              )}
            </ItemWrapper>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default FilterDropDown;
