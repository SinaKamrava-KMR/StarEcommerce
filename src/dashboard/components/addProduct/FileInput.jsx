import styled from "@emotion/styled";

const FileInputStyled = styled("input")`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

function FileInput() {
  return (
    <FileInputStyled type="file" />
  )
}

export default FileInput