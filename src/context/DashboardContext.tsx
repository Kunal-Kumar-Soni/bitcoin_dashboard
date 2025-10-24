import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ApiData } from "../types/apiData";

type ChartDataPoint = {
  time: string;
  price: number;
};

type DashboardContextType = {
  apiData: ApiData | null;
  btcHistory: ChartDataPoint[];
};

export const DashboardContext = createContext<DashboardContextType | null>(null);

const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [btcHistory, setBtcHistory] = useState<ChartDataPoint[]>([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&include_24hr_change=true"
    );
    const data = await res.json();
    setApiData(data);
  };

  const fetchHistory = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0.25"
    );
    const data = await res.json();

    // 1-hour gap points
    const points = data.prices
      .filter((_: any, i: number) => i % 12 === 0)
      .map(([timeStamp, price]: [number, number]) => ({
        time: new Date(timeStamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        price: Math.round(price),
      }));

    // fetch latest price separately
    const latestRes = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    const latestData = await latestRes.json();
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    points.push({
      time: now,
      price: latestData.bitcoin.usd,
    });

    setBtcHistory(points);
  };

  useEffect(() => {
    fetchData();
    fetchHistory();
    const timer = setInterval(() => {
      fetchData();
      fetchHistory();
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <DashboardContext.Provider value={{ apiData, btcHistory }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardData = () => {
  return useContext(DashboardContext);
};

export default DashboardProvider;
