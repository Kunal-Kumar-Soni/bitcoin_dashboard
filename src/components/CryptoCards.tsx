import { useDashboardData } from "../context/DashboardContext";

const CryptoCard = () => {
  const { apiData } = useDashboardData() ?? {};

  if (!apiData) return <h1>Loading....</h1>;

  const infos = [
    {
      name: "Bitcoin (BTC)",
      price: apiData?.bitcoin?.usd ?? "...",
      change: apiData?.bitcoin?.usd_24h_change ?? 0,
    },
    {
      name: "Ethereum (ETH)",
      price: apiData?.ethereum?.usd ?? "...",
      change: apiData?.ethereum?.usd_24h_change ?? 0,
    },
    {
      name: "Dogecoin (DOGE)",
      price: apiData?.dogecoin?.usd ?? "...",
      change: apiData?.dogecoin?.usd_24h_change ?? 0,
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-6xl">
      {infos.map((info, i) => {
        const isPositive = info.change >= 0;
        return (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-2xl w-full hover:scale-105 transition-transform duration-300"
          >
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">{info.name}</h2>
            <p className="font-bold text-gray-900 text-3xl">${info.price}</p>
            <p
              className={`mt-2 font-semibold text-lg ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >{`${isPositive ? "▲" : "▼"} ${info.change.toFixed(2)}%`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CryptoCard;
