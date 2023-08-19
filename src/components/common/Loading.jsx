import { createPortal } from "react-dom";
import { keyframes, styled } from "styled-components";

const Wrapper = styled.div`

  z-index: 99998;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222222ad;

`;

const Box = styled.div`
      width: 100px;
      height: 100px;
     
      display: flex;
      align-items: center;
      justify-content:center;
      border-radius: 0.5rem;
     

`
const rotate = keyframes`
to {
  transform: rotate(1turn)
}
`;
const Spinner = styled.div`
  margin: 4.8rem auto;
  width: 5.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #fff 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, #e3e3e3);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #575656 0);
  animation: ${rotate} 1.5s infinite linear;
`;


function Loading() {
  return createPortal(<Wrapper>
    <Box>
      <Spinner/>
      </Box>
  </Wrapper>, document.body);
}

export default Loading;
