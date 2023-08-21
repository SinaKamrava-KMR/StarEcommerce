import { styled } from "styled-components";
import {
  HiOutlinePencilSquare,
  HiAcademicCap,
  HiMiniCheck,
  HiMiniPlus,
} from "react-icons/hi2";

import PropTypes from "prop-types";
import { useState } from "react";
AddItemNode.propTypes = {
  delay: PropTypes.number,
  title: PropTypes.string,
  bgColor: PropTypes.string,
};
const Wrapper = styled.div`
  width: 300px;
  height: 50px;

  border-radius: 0.3rem;

  background:${props=>props.bgcolor};
  position: relative;
  border: 1px dashed #525252;
  display: flex;
  color: #153253;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  cursor: pointer;
`;

const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  gap: 2rem;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  gap: 2rem;
`;
function AddItemNode({ title ,bgColor="#fbfbde"}) {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <Wrapper bgcolor={bgColor} onClick={() => setIsAdding(true)}>
      {!isAdding ? (
        <AddWrapper>
          <p>{title}</p>
          <HiMiniPlus fontSize={22} />
        </AddWrapper>
      ) : (
          <Container>
            
        </Container>
      )}
    </Wrapper>
  );
}

export default AddItemNode;
