
import { styled } from "styled-components";
import PropTypes from "prop-types";
import EyeIcon from "./EyeIcon";
import EyeSlash from "./EyeSlash";

SeePassIcon.propTypes = {
  allow: PropTypes.bool,
};

const Wrapper = styled.div``;

function SeePassIcon({ allow }) {
  return <Wrapper>{allow ? <EyeIcon /> : <EyeSlash />}</Wrapper>;
}

export default SeePassIcon;
