import styled from "@emotion/styled";
import PropTypes from "prop-types";

ActiveWrapper.propTypes = {
  activeId: PropTypes.bool,
};

const Wrapper = styled("div")(({ position }) => ({
  position: "absolute",
  height:"39px",
  top: position,
  left: "0",
  right: "0",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  cursor: "pointer",
  overflow: "hidden",
  backgroundColor: "#06041cd0",
  borderRadius: ".5rem",
  zIndex: 0,
  transition: "top .2s ease-in",
  "@media (max-width:950px)": {
    top: (position -3),
    
  }
}));

function ActiveWrapper({ activeId }) {
  let position;
  switch (activeId) {
    case "main":
      position = 13;
      break;
    case "orders":
      position = 65;
      break;
    case "products":
      position = 115;
      break;
    case "management":
      position = 169;
      break;
    case "users":
      position = 220;
      break;
    case "addProduct":
      position = 268;
      break;
  }

  return <Wrapper position={position}></Wrapper>;
}

export default ActiveWrapper;
