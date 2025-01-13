import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const StatCard = ({
  title,
  value,
  trend,
  icon: Icon,
  loading = false,
  className = "",
}) => {
  if (loading) {
    return (
      <div
        className={`bg-white rounded-lg shadow-sm p-6 animate-pulse ${className}`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
    );
  }

  const trendValue = parseFloat(trend);
  const isPositive = trendValue >= 0;

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <span
          className={`text-sm font-medium flex items-center ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDown className="w-4 h-4 mr-1" />
          )}
          {Math.abs(trendValue)}%
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

export default StatCard;
