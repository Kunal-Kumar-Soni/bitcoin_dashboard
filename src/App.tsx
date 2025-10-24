import "./App.css";
import DashboardProvider from "./context/DashboardContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <DashboardProvider>
      <div className="bg-slate-200 mx-auto p-6 mx-w-7xl min-h-screen">
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;
