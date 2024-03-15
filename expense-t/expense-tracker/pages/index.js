import { Chart } from "@/components/Chart.1";
import { Dashboard } from "@/components/Dashboard";
import { DoughnutChart } from "@/components/DoughnutChart";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div className="container mx-auto m-4">
      <Header />
      <div className="flex justify-center items-center">
        <a href="/login" className="btn text-black  bg-blue-600  w-20">
          login
        </a>
      </div>
    </div>
  );
}
