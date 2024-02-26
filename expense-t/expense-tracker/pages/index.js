import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div className="container mx-auto m-4">
      <Header />
      <Dashboard />
    </div>
  );
}
