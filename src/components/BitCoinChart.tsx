import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useDashboardData } from "../context/DashboardContext";

const BitCoinChart = () => {
  const { btcHistory } = useDashboardData() ?? { btcHistory: [] };

  return (
    <div className="bg-white shadow-md rounded-2xl w-full">
      <h2 className="mb-4 font-semibold text-gray-900 text-xl text-center">Bitcoin Price Trend</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={btcHistory}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="time" stroke="#4b5563" />
            <YAxis stroke="#4b5563" />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
              }}
            />
            <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot={true} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BitCoinChart;
