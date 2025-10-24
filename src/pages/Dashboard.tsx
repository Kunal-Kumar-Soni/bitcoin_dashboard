import BitCoinChart from "../components/BitCoinChart";
import CryptoCard from "../components/CryptoCards";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center p-8">
      {/* Header */}
      <h1 className="mb-10 font-bold text-gray-900 text-4xl text-center">
        Live Crypto Price Dashboard
      </h1>

      {/* Cards Section */}
      <CryptoCard />

      {/* Bitcoin Chart */}
      <div className="mt-12 w-full max-w-6xl">
        <BitCoinChart />
      </div>
    </div>
  );
};

export default Dashboard;
