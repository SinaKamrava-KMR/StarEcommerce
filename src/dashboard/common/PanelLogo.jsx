import styled from "@emotion/styled"
import { Box } from "@mui/material"

const LogoBox = styled(Box)({
  display: "flex",
  gap: "1rem",
  alignItems:"center"
})

const Logo = styled("img")({
  width: "40px",
  height: "40px",
  "@media (max-width:640px)": {
    width: "25px",
    height: "25px",
  },
})
const Text = styled("p")({
  whiteSpace: "nowrap",
  fontSize: "2rem",
  fontWeight: "600",
  "@media (max-width:640px)": {
    fontSize: "1.6rem",
  },
})

function PanelLogo() {
  return (
    <LogoBox>
      
        <Logo src="/public/dashboard_icon.png" alt="dashboard logo" />
      <Text>
        پنل مدیریت
      </Text>
    </LogoBox>
  )
}

export default PanelLogo