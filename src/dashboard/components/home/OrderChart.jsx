import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Wrapper = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  min-width: 300px;
`;

const data = [
  { name: "اردیبهشت", value: 50 },
  { name: "خرداد", value: 600 },
  { name: "تیر", value: 80 },
  { name: "مرداد", value: 300 },
];

const colors = {
  totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
  extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
  text: "#374151",
  background: "#fff",
};

const CutomTick = (tickObject) => {
  const {
    payload: { value },
  } = tickObject;
  tickObject["x"] = "2";
  return <Text {...tickObject}>{value}</Text>;
};

function OrderChart() {
  return (
    <Wrapper>
      <Typography variant="content"> پرفروش ترین ماه های سال</Typography>
      <ResponsiveContainer height={250} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="تومان"
            tick={(tickObject) => CutomTick(tickObject)}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="value"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="فروش کل"
            unit="تومان"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default OrderChart;
