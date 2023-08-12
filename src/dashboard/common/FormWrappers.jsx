import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

export const InfoWrapper = styled(Box)`
  width: 100%;
  background-color: #fff;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2.5rem;
`;
export const StockWrapper = styled(Box)`
  background-color: #fff;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  padding-bottom: 3rem;
`;

export const Row = styled(Box)`
  
  display: flex;
  align-items: center;
  gap: 1rem;

`

export const Form = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  gap: "2rem",
  gridRow: "span 2",
  height: "410px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});
  

