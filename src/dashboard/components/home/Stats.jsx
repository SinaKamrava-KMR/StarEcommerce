import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Stat from "../../../components/common/Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

function Stats() {
  return (
    <Wrapper>
      <Stat
        title="تعداد محصولات"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value="۴۲"
      />

      <Stat
        title="کل فروش"
        color="green"
        icon={<HiOutlineBanknotes />}
        value="۹۹۹"
      />
      <Stat
        title="کاربران"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value="۱۲۴"
      />
      <Stat
        title="تعداد سفارشات"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value="۱۸۷"
      />
    </Wrapper>
  );
}

export default Stats;
