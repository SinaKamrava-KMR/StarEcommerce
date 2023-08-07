import { styled } from "@material-ui/core";
import { Box } from "@mui/material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InprogressIcon from "../../common/InprogressIcon";
import DoneIcon from "../../common/DoneIcon";

const TabStyles = styled("p")(({ active }) => ({
  color: active ? "#2e59f4" : "#a0a0a0",
  fontSize: "1.5rem",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "@media (max-width:950px)": {
    fontSize: "12px",
  },
}));
const Tabs = styled(Box)({
  display: "flex",
  gap: "3rem",
  position: "relative",
  paddingBlock: "1rem",
});
const TabWrapper = styled(Box)({
  display: "flex",
  gap: "1rem",
});
const Line = styled(Box)(({ position }) => ({
  position: "absolute",
  bottom: "0",
  right: position,
  width: "130px",
  height: "2px",
  transition: "all .3s ease",
  borderRadius: "10px",
  backgroundColor: "#0b054c84",
}));

function OrderTabs() {
  const navigate = useNavigate();
  let location = useLocation().search.split("=").at(-1);
  location = location === "done" ? 1 : 0;
  const [activeTab, setActiveTab] = useState(location);
  let position;
  switch (activeTab) {
    case 0:
      position = 0;
      break;
    case 1:
      position = 148;
      break;
  }

  useEffect(() => {
    navigate(
      `/dashboard/orders?state=${activeTab === 0 ? "inprogress" : "done"}`
    );
  }, [activeTab, navigate]);

  return (
    <Box>
      <Tabs value={activeTab.toString()}>
        <Line position={position} />
        <TabWrapper>
          <InprogressIcon active={activeTab === 0} />
          <TabStyles
            value="0"
            active={activeTab === 0}
            onClick={() => setActiveTab(0)}
          >
            در انتظار ارسال
          </TabStyles>
        </TabWrapper>
        <TabWrapper>
          <DoneIcon active={activeTab === 1} />
          <TabStyles
            value="1"
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
          >
            تحویل داده شد
          </TabStyles>
        </TabWrapper>
      </Tabs>
    </Box>
  );
}

export default OrderTabs;
