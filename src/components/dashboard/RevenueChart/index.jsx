import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calendar } from "lucide-react";
import Card from "../../common/Card";
import Select from "../../common/Select";

const RevenueChart = ({ data, loading, onPeriodChange }) => {
  const [period, setPeriod] = useState("week");

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
    onPeriodChange(e.target.value);
  };

  const periodOptions = [
    { value: "week", label: "Cette semaine" },
    { value: "month", label: "Ce mois" },
    { value: "year", label: "Cette année" },
  ];

  const formatValue = (value) => {
    return `${value.toLocaleString()} MAD`;
  };

  if (loading) {
    return (
      <Card className="animate-pulse">
        <div className="h-[400px] bg-gray-100 rounded"></div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Chiffre d'affaires</h3>
        <Select
          value={period}
          onChange={handlePeriodChange}
          options={periodOptions}
          className="w-48"
        />
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickFormatter={formatValue}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFF",
                border: "1px solid #E5E7EB",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
              formatter={formatValue}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Chiffre d'affaires"
              stroke="#059669"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#059669" }}
            />
            <Line
              type="monotone"
              dataKey="target"
              name="Objectif"
              stroke="#9CA3AF"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RevenueChart;
