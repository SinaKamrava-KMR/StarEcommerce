import { Button, styled } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const LinkTo = styled(Link)({
  fontSize: "14px",
  fontFamily: "IRANSansXV",
  color: "#4778eb",
  whiteSpace:"nowrap",
  "@media (max-width:640px)": {
    fontSize: "12px",
  },
});
const Btn = styled(Button)({
  padding: ".6rem 1rem",
  display: "flex",
  width: "160px",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width:640px)": {
    padding: ".5rem .8rem",
    width: "140px",
  },
});

function BackButton() {
  return (
    <Btn variant="outlined">
      <LinkTo to="/">بازگشت به فروشگاه</LinkTo>
      <ArrowBackIosNewIcon sx={{ marginBottom: "2px" }} />
    </Btn>
  );
}

export default BackButton;
