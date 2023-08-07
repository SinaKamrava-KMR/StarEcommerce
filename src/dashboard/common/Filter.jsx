import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { useState } from "react";
import FilterDropDown from "./FilterDropDown";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

Filter.propTypes = {
  onClick: PropTypes.func,
  items: PropTypes.array,
  label: PropTypes.string,
  delay: PropTypes.string,
  children: PropTypes.node,
};

const Wrapper = styled(Box)(({ active }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  width: "fit-content",
  cursor: "pointer",
  border: `1px solid ${active ? "#1d77ed" : "#d9d9d9"}`,
  padding: ".5rem 1rem",
  borderRadius: "5px",
  transition: "all .2s ease",
  "&:hover": {
    boxShadow: "0 0 10px #e6e6e6",
  },
  "&:active": {
    boxShadow: "0 0 5px #ffffff",
  },
  "&>*": {
    color: `${active ? "#1d77ed" : "#767676"}`,
    "@media (max-width:950px)": {
      fontSize: "12px",
    },
  },
}));
const Label = styled("p")({
  fontWeight: "500",
  fontSize: "14px",
  whiteSpace: "nowrap",
  "@media (max-width:950px)": {
    fontSize: "10px",
  },
});

function Filter({ label, items, children, delay, onClick }) {
  const [boxActive, setBoxActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  function handleOnSelected(item) {
    setSelectedItem(item);
    onClick(item);
  }

  return (
    <Wrapper
      component={motion.div}
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay, animate: "spring" }}
      active={boxActive || selectedItem !== ""}
      onClick={() => setBoxActive((s) => !s)}
      onMouseLeave={() => setBoxActive(false)}
    >
      <Label>{label}</Label>
      {boxActive && (
        <FilterDropDown
          label={label}
          onSelectItem={handleOnSelected}
          contents={items}
        />
      )}
      {selectedItem !== "" ? <FactCheckIcon /> : children}
    </Wrapper>
  );
}

export default Filter;
