import React from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  HiOutlineChartBar,
  HiOutlineShoppingBag,
  HiOutlineCurrencyDollar,
  HiOutlineFire,
} from "react-icons/hi";

const Analytics = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // TODO: backend integration -> dispatch(fetchAnalytics()) on mount
  const summary = [
    { label: "Total Orders", value: "1,240", icon: HiOutlineShoppingBag },
    { label: "Total Revenue", value: "£8,450", icon: HiOutlineCurrencyDollar },
    { label: "Avg Order Value", value: "£6.80", icon: HiOutlineChartBar },
  ];

  const popularItems = [
    { name: "Big Mac Combo", orders: 320, percent: 80 },
    { name: "Chicken McNuggets", orders: 245, percent: 61 },
    { name: "Cheesy Fries", orders: 190, percent: 47 },
    { name: "Vanilla Milkshake", orders: 130, percent: 32 },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FC8A06]">
          <HiOutlineChartBar className="w-5 h-5 text-white" />
        </div>
        <h1 className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
          Analytics
        </h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {summary.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl p-4 sm:p-5 shadow-sm transition-colors duration-300 ${
              isDark ? "bg-[#0b1020] border border-white/10" : "bg-white"
            }`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#FC8A06] mb-3">
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <p className={`text-[11px] sm:text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {stat.label}
            </p>
            <p className={`text-base sm:text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Popular items bar chart (CSS-based, no library) */}
      <div
        className={`rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-300 ${
          isDark ? "bg-[#0b1020] border border-white/10" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-2 mb-5">
          <HiOutlineFire className="w-5 h-5 text-[#FC8A06]" />
          <h2 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Popular Items
          </h2>
        </div>

        <div className="space-y-4">
          {popularItems.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs sm:text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                  {item.name}
                </span>
                <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {item.orders} orders
                </span>
              </div>
              <div className={`w-full h-2.5 rounded-full ${isDark ? "bg-white/10" : "bg-gray-100"}`}>
                <div
                  className="h-2.5 rounded-full bg-[#FC8A06] transition-all duration-500"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;