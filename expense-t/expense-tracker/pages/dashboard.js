import { Chart } from "@/components/Chart";
import { Dashboard } from "@/components/Dashboard";
import { DoughnutChart } from "@/components/DoughnutChart";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div className="container mx-auto m-4">
      <Header />
      <Dashboard />
      <div className="flex items-stretch">
        <div className="w-1/2">
          <Chart />
        </div>
        <div className="w-1/2 h-[320px]">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
