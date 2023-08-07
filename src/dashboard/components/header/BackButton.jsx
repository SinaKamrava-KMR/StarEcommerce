import { Button, styled } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const LinkTo = styled("p")({
  fontSize: "14px",
  fontFamily: "IRANSansXV",
  color: "#4778eb",
  whiteSpace: "nowrap",
  "@media (max-width:640px)": {
    display:"none"
  },
});
const Btn = styled(Button)({
  padding: ".6rem 1rem",
  display: "flex",
  width: "160px",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width:640px)": {
    all:"unset",
    padding: "0",
    justifyContent: "center",
    display: "flex",
    alignItems:"center",
    width: "40px",
    height: "40px",
    borderRadius:"50%"
  },
});

function BackButton() {

  return (
    <Link to="/">
      <Btn variant="outlined">
        <LinkTo>بازگشت به فروشگاه</LinkTo>
        <ArrowBackIosNewIcon  sx={{ marginBottom: "2px" }} />
      </Btn>
    </Link>
  );
}

export default BackButton;
