import styled from "@emotion/styled";
import PropTypes from "prop-types";

FileInput.propTypes = {
  onUpload: PropTypes.func,
};
const FileInputStyled = styled("input")`
  width: 100%;
  height: 100%;
  opacity: 0;

  
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

function FileInput({onUpload}) {
  return (
    <FileInputStyled type="file" onChange={onUpload}/>
  )
}

export default FileInput