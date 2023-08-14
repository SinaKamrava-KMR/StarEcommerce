import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "اصفحان", value: 400 },
  { name: "تهران", value: 300 },
  { name: "مشهد", value: 300 },
  { name: "تنکابن", value: 200 },
];

const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#fa6666",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#fc944a",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#f6cd53",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#7cf8a5",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#75c2f9",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#a855f7",
  },
];

const Wrapper = styled(Box)`
  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  & .recharts-surface {
    margin-left: 0.8rem;
  }

  & .recharts-default-legend li{
      display: flex !important;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
  }
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
  @media (max-width: 980px) {
    width: 100%;
  }
`;
function SalesChart() {
  return (
    <Wrapper>
      <Typography variant="content">
         شهرهای پرتقاضا
      </Typography>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={0}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={0}
          >
            {startDataLight.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default SalesChart;
